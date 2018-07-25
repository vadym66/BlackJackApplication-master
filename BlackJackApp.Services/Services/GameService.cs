using BlackJackApp.Entities.Entities;
using BlackJackApp.Entities.Enums;
using BlackJackApp.Services.Enums;
using BlackJackApp.ViewModels.GameModels;
using BlackJackApp.Services.Interfaces;
using BlackJackApp.ViewModels.Enums;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJackApp.DataAccess.Interfaces;

namespace BlackJackApp.Services
{
    public class GameService : IGameService
    {
        private IGameRepository<Game> _gameRepository;
        private IRoundRepository<Round> _roundRepository;
        private IPlayerRepository<Player> _playerRepository;
        private ICardRepository<Card> _cardRepository;
        private IPlayersGameRepository<PlayerGames> _playersGameRepository;
        private const int twentyOnePoint = 21;
        private const int dealerPointBorder = 17;

        public GameService(IGameRepository<Game> gameRepository,
                            IPlayerRepository<Player> playerRepository,
                            IRoundRepository<Round> roundRepository,
                            ICardRepository<Card> cardRepository,
                            IPlayersGameRepository<PlayerGames> playersGameRepository)
        {
            _gameRepository = gameRepository;
            _playerRepository = playerRepository;
            _roundRepository = roundRepository;
            _cardRepository = cardRepository;
            _playersGameRepository = playersGameRepository;
        }

        public async Task<int> StartGame(StartGameView viewFromUI)
        {
            int gameId = await CreateGame(viewFromUI.PlayerName, viewFromUI.BotQuantity);
            var rounds = new List<Round>();

            rounds.AddRange(await CreateHuman(viewFromUI.PlayerName, gameId));
            if (viewFromUI.BotQuantity != 0)
            {
                rounds.AddRange(await CreateBots(viewFromUI.BotQuantity, gameId));
            }
            rounds.AddRange(await CreateDealer(gameId));

            return gameId;
        }

        public async Task<RoundGameView> GetFirstRound(int id)
        {
            var rounds = await _roundRepository.GetRounds(id);

            var roundModel = await MappingToViewModel(rounds);

            await CheckRules(roundModel);

            return await CompleteRound(roundModel);

        }

        public async Task<UserView> GetPlayers()
        {
            var result = await _playerRepository.GetAll();

            var users = new UserView();
            foreach (var name in result)
            {
                var usersViewItem = new UserViewItem();
                usersViewItem.Name = name;
                users.Users.Add(usersViewItem);
            }
            return users;
        }

        private async Task<RoundGameView> CompleteRound(RoundGameView roundModel)
        {
            var humanPlayer = GetHumanPlayer(roundModel.Users);
            var dealer = GetDealer(roundModel.Users);

            if (humanPlayer.PlayerStatus == PlayerStatusEnumView.Lose &&
                dealer.PlayerStatus == PlayerStatusEnumView.DefaultValue)
            {
                if (roundModel.Users.Count > 2)
                {
                    await CheckDealer(roundModel.Users);
                    await FinalPointsCount(roundModel);
                }
                roundModel.IsResultComplete = true;
                return roundModel;
            }
            if (dealer.PlayerStatus == PlayerStatusEnumView.Winner)
            {
                foreach (var player in roundModel.Users)
                {
                    if (player.PlayerStatus == PlayerStatusEnumView.DefaultValue)
                    {
                        player.PlayerStatus = PlayerStatusEnumView.Lose;
                    }
                };
                roundModel.IsResultComplete = true;

                return roundModel;
            }

            if (dealer.PlayerStatus == PlayerStatusEnumView.Lose)
            {
                foreach (var player in roundModel.Users)
                {
                    if (player.PlayerStatus == PlayerStatusEnumView.DefaultValue)
                    {
                        player.PlayerStatus = PlayerStatusEnumView.Winner;
                    }
                };
                roundModel.IsResultComplete = true;
                return roundModel;
            }

            if (humanPlayer.PlayerStatus == PlayerStatusEnumView.Winner)
            {
                return await FinalPointsCount(roundModel);
            }
            UpdateStatus(roundModel);
            return roundModel;
        }

        public async Task<RoundGameView> CreateNextRoundForPlayers(int gameId)
        {
            var rounds = new List<Round>();

            rounds = await _roundRepository.GetRounds(gameId);

            var result = rounds.GroupBy(r => r.Player.Name);

            foreach (var item in result)
            {
                int cardSum = 0;
                var player = new Player();
                foreach (var round in item)
                {
                    player = round.Player;
                    cardSum += round.Card.Value;
                }
                if (player.PlayerRole != EntityPlayerRole.Dealer &&
                    cardSum < twentyOnePoint)
                {
                    rounds.Add(await CreateNextRoundForPlayers(player, gameId));
                }
            }

            var roundModel = await MappingToViewModel(rounds);

            await CheckRules(roundModel);
            UpdateStatus(roundModel);
            return await CompleteRound(roundModel);
        }

        public async Task<RoundGameView> CreateNextRoundForDealer(int gameId)
        {
            var rounds = new List<Round>();
            rounds = await _roundRepository.GetRounds(gameId);
            var roundModel = await MappingToViewModel(rounds);

            await CheckDealer(roundModel.Users);
            return await FinalPointsCount(roundModel);

        }

        private async Task<RoundGameView> FinalPointsCount(RoundGameView roundModel)
        {
            var dealer = GetDealer(roundModel.Users);

            foreach (var player in roundModel.Users)
            {
                if (player.PlayerStatus == PlayerStatusEnumView.DefaultValue)
                {
                    if (player.CardSum > dealer.CardSum &&
                        player.CardSum < twentyOnePoint)
                    {
                        player.PlayerStatus = PlayerStatusEnumView.Winner;
                    }
                    if (player.CardSum < twentyOnePoint &&
                        player.CardSum > dealer.CardSum)
                    {
                        player.PlayerStatus = PlayerStatusEnumView.Winner;
                    }
                    if (player.CardSum < twentyOnePoint &&
                        player.CardSum < dealer.CardSum)
                    {
                        player.PlayerStatus = PlayerStatusEnumView.Lose;
                    }
                    if (player.CardSum < dealer.CardSum &&
                        dealer.CardSum < twentyOnePoint)
                    {
                        player.PlayerStatus = PlayerStatusEnumView.Lose;
                    }
                    if (player.CardSum == dealer.CardSum)
                    {
                        player.PlayerStatus = PlayerStatusEnumView.Draw;
                    }
                }
                if (player.PlayerRole == PlayerRoleEnumView.Dealer)
                {
                    player.PlayerStatus = dealer.PlayerStatus;
                }
            }

            roundModel.IsResultComplete = true;
            return roundModel;
        }

        private void UpdateStatus(RoundGameView roundModel)
        {
            foreach (var player in roundModel.Users)
            {
                int status = (int)player.PlayerStatus;
                _playersGameRepository.UpdateStatus(player.GameId, player.PlayerId, status);
            }
        }

        private async Task<int> CreateGame(string name, int botNumber)
        {
            var game = new Game();
            game.Id = await _gameRepository.Add(game);
            return game.Id;
        }

        private async Task<List<Round>> CreateHuman(string name, int gameId)
        {
            Player player;
            player = await _playerRepository.GetHuman(name);

            if (player == null)
            {
                player = new Player { Name = name };
                player.PlayerRole = EntityPlayerRole.Human;
                player.Id = await _playerRepository.Add(player);
            }

            await AddPlayerToCurrentGame(player, gameId);
            return await CreateFirstRound(player, gameId);
        }

        private async Task<List<Round>> CreateBots(int botNumber, int gameId)
        {
            var rounds = new List<Round>();
            IEnumerable<Player> players;

            players = await _playerRepository.GetBots(botNumber);

            foreach (var player in players)
            {
                await AddPlayerToCurrentGame(player, gameId);
                rounds.AddRange(await CreateFirstRound(player, gameId));
            }
            return rounds;
        }

        private async Task<List<Round>> CreateDealer(int gameId)
        {
            var dealer = await _playerRepository.GetDealer();
            dealer.PlayerRole = EntityPlayerRole.Dealer;
            await AddPlayerToCurrentGame(dealer, gameId);
            return await CreateFirstRound(dealer, gameId);
        }

        private async Task<List<Round>> CreateFirstRound(Player player, int gameId)
        {
            var rounds = new List<Round>();

            var firstRound = new Round();
            var secondRound = new Round();

            var firstCard = new Card();
            var secondCard = new Card();

            firstCard = await _cardRepository.GetRandom();
            secondCard = await _cardRepository.GetRandom();

            firstRound.GameId = gameId;
            firstRound.PlayerId = player.Id;
            firstRound.CardId = firstCard.Id;
            firstRound.Id = await _roundRepository.Add(firstRound, gameId);

            secondRound.GameId = gameId;
            secondRound.PlayerId = player.Id;
            secondRound.CardId = secondCard.Id;
            secondRound.Id = await _roundRepository.Add(secondRound, gameId);

            firstRound.Card = firstCard;
            firstRound.Player = player;
            rounds.Add(firstRound);

            secondRound.Card = secondCard;
            secondRound.Player = player;
            rounds.Add(secondRound);

            return rounds;
        }

        private async Task<Round> CreateNextRoundForPlayers(Player player, int gameId)
        {
            var round = new Round();
            var card = new Card();

            card = await _cardRepository.GetRandom();

            round.PlayerId = player.Id;
            round.GameId = gameId;
            round.CardId = card.Id;
            round.Player = player;
            round.Card = card;

            await _roundRepository.Add(round, round.GameId);

            return round;
        }

        private async Task CreateNextRoundForDealer(PlayerNextRoundViewItem dealer)
        {
            var round = new Round();
            var card = new Card();

            card = await _cardRepository.GetRandom();

            round.PlayerId = dealer.PlayerId;
            round.GameId = dealer.GameId;
            round.CardId = card.Id;

            var cardViewModel = new CardGameViewItem();
            cardViewModel.Rank = card.Rank.ToString();
            cardViewModel.Suit = card.Suit.ToString();
            cardViewModel.Value = card.Value;

            dealer.CardSum += card.Value;

            dealer.Cards.Add(cardViewModel);
            await _roundRepository.Add(round, round.GameId);
        }

        private void CheckAce(Card card, int playerCardSum)
        {
            if (card.Rank == CardRank.Ace)
            {
                if (card.Value + playerCardSum > twentyOnePoint)
                {
                    card.Value = 1;
                }
            }
        }

        private async Task CheckDealer(List<PlayerNextRoundViewItem> players)
        {
            foreach (var player in players)
            {
                if (player.PlayerRole == PlayerRoleEnumView.Dealer)
                {
                    if (player.CardSum < dealerPointBorder)
                    {
                        while (player.CardSum < dealerPointBorder)
                        {
                            await CreateNextRoundForDealer(player);
                        }
                    }
                }
            }
        }
        
        private PlayerNextRoundViewItem GetHumanPlayer(List<PlayerNextRoundViewItem> players)
        {
            foreach (var player in players)
            {
                if (player.PlayerRole == PlayerRoleEnumView.Human)
                {
                    return player;
                }
            }
            return null;
        }

        private PlayerNextRoundViewItem GetDealer(List<PlayerNextRoundViewItem> players)
        {
            foreach (var player in players)
            {
                if (player.PlayerRole == PlayerRoleEnumView.Dealer)
                {
                    return player;
                }
            }
            return null;
        }

        private async Task<RoundGameView> MappingToViewModel(List<Round> rounds)
        {
            var result = rounds.GroupBy(p => p.Player.Name);
            var roundViewModel = new RoundGameView();

            foreach (var round in result)
            {
                var userModel = new PlayerNextRoundViewItem();
                userModel.UserName = round.Key;

                foreach (var item in round)
                {
                    var cardViewModel = new CardGameViewItem();
                    PlayerGames playerGames = await GetPlayerStatus(item.PlayerId, item.GameId);

                    userModel.PlayerId = item.PlayerId;
                    userModel.GameId = item.GameId;
                    userModel.PlayerRole = (PlayerRoleEnumView)item.Player.PlayerRole;
                    userModel.PlayerStatus = (PlayerStatusEnumView)playerGames.Status;

                    cardViewModel.Rank = item.Card.Rank.ToString();
                    cardViewModel.Suit = item.Card.Suit.ToString();
                    cardViewModel.Value = item.Card.Value;
                    userModel.CardSum += item.Card.Value;

                    userModel.Cards.Add(cardViewModel);
                }
                roundViewModel.Users.Add(userModel);
            }
            roundViewModel.GameId = rounds[0].GameId;

            return roundViewModel;
        }

        private async Task AddPlayerToCurrentGame(Player player, int gameId)
        {
            await _playersGameRepository.AddPlayer(player, gameId);
        }

        private async Task<PlayerGames> GetPlayerStatus(int playerId, int gameId)
            => await _playersGameRepository.GetStatus(playerId, gameId);

        private async Task CheckRules(RoundGameView roundModel)
        {
            foreach (var player in roundModel.Users) // check for blackJack
            {
                if (player.CardSum == twentyOnePoint)
                {
                    player.PlayerStatus = PlayerStatusEnumView.Winner;
                }
                if (player.CardSum > twentyOnePoint) //check for more than twenty one
                {
                    player.PlayerStatus = PlayerStatusEnumView.Lose;
                }
            }
        }

      
    }
}
