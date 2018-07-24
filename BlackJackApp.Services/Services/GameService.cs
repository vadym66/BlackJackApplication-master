using BlackJackApp.DAL.Interfaces;
using BlackJackApp.DataAccess.Interface;
using BlackJackApp.Entities.Entities;
using BlackJackApp.Entities.Enums;
using BlackJackApp.Services.Enums;
using BlackJackApp.Services.ServiceInterfaces;
using BlackJackApp.ViewModels;
using BlackJackApp.ViewModels.Enums;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        public async Task<int> StartGameForApi(StartGameView viewFromUI)
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

        public async Task<RoundGameView> GetRounds(int id)
        {
            var rounds = await _roundRepository.GetRounds(id);

            var roundModel = await MappingToViewModel(rounds);

            await CheckRules(roundModel);

            return await CompleteRound(roundModel);

        }

        public async Task<RoundGameView> StartGame(StartGameView viewFromUI)
        {
            int gameId = await CreateGame(viewFromUI.PlayerName, viewFromUI.BotQuantity);
            var rounds = new List<Round>();

            rounds.AddRange(await CreateHuman(viewFromUI.PlayerName, gameId));
            if (viewFromUI.BotQuantity != 0)
            {
                rounds.AddRange(await CreateBots(viewFromUI.BotQuantity, gameId));
            }
            rounds.AddRange(await CreateDealer(gameId));

            var roundModel = await MappingToViewModel(rounds);

            await CheckRules(roundModel);

            return await CompleteRound(roundModel);
        }

        public async Task<IEnumerable<UserViewModel>> GetPlayers()
        {
            var userList = new List<UserViewModel>();
            var result = await _playerRepository.GetAll();

            foreach (var item in result)
            {
                var user = new UserViewModel();
                user.Name = item;
                userList.Add(user);
            }
            return userList;
        }

        private async Task<RoundGameView> CompleteRound(RoundGameView roundModel)
        {
            var humanPlayer = GetHumanPlayer(roundModel.Users);
            var dealer = GetDealer(roundModel.Users);

            if (humanPlayer.PlayerStatus == PlayerStatus.Lose &&
                dealer.PlayerStatus == PlayerStatus.DefaultValue)
            {
                if (roundModel.Users.Count > 2)
                {
                    await CheckDealer(roundModel.Users);
                    await FinalPointsCount(roundModel);
                }
                roundModel.IsResultComplete = true;
                return roundModel;
            }
            if (dealer.PlayerStatus == PlayerStatus.Winner)
            {
                foreach (var player in roundModel.Users)
                {
                    if (player.PlayerStatus == PlayerStatus.DefaultValue)
                    {
                        player.PlayerStatus = PlayerStatus.Lose;
                    }
                };
                roundModel.IsResultComplete = true;

                return roundModel;
            }

            if (dealer.PlayerStatus == PlayerStatus.Lose)
            {
                foreach (var player in roundModel.Users)
                {
                    if (player.PlayerStatus == PlayerStatus.DefaultValue)
                    {
                        player.PlayerStatus = PlayerStatus.Winner;
                    }
                };
                roundModel.IsResultComplete = true;
                return roundModel;
            }

            if (humanPlayer.PlayerStatus == PlayerStatus.Winner)
            {
                return await FinalPointsCount(roundModel);
            }
            UpdateStatus(roundModel);
            return roundModel;
        }

        public async Task<RoundGameView> NextRoundForPlayers(int gameId)
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

        public async Task<RoundGameView> NextRoundForDealer(int gameId)
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
                if (player.PlayerStatus == PlayerStatus.DefaultValue)
                {
                    if (player.CardSum > dealer.CardSum &&
                        player.CardSum < twentyOnePoint)
                    {
                        player.PlayerStatus = PlayerStatus.Winner;
                    }
                    if (player.CardSum < twentyOnePoint &&
                        player.CardSum > dealer.CardSum)
                    {
                        player.PlayerStatus = PlayerStatus.Winner;
                    }
                    if (player.CardSum < twentyOnePoint &&
                        player.CardSum < dealer.CardSum)
                    {
                        player.PlayerStatus = PlayerStatus.Lose;
                    }
                    if (player.CardSum < dealer.CardSum &&
                        dealer.CardSum < twentyOnePoint)
                    {
                        player.PlayerStatus = PlayerStatus.Lose;
                    }
                    if (player.CardSum == dealer.CardSum)
                    {
                        player.PlayerStatus = PlayerStatus.Draw;
                    }
                }
                if (player.PlayerRole == PlayerRole.Dealer)
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

        private async Task CreateNextRoundForDealer(PlayerNextRoundView dealer)
        {
            var round = new Round();
            var card = new Card();

            card = await _cardRepository.GetRandom();

            round.PlayerId = dealer.PlayerId;
            round.GameId = dealer.GameId;
            round.CardId = card.Id;

            var cardViewModel = new CardGameView();
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

        private async Task CheckDealer(List<PlayerNextRoundView> players)
        {
            foreach (var player in players)
            {
                if (player.PlayerRole == PlayerRole.Dealer)
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
        
        private PlayerNextRoundView GetHumanPlayer(List<PlayerNextRoundView> players)
        {
            foreach (var player in players)
            {
                if (player.PlayerRole == PlayerRole.Human)
                {
                    return player;
                }
            }
            return null;
        }

        private PlayerNextRoundView GetDealer(List<PlayerNextRoundView> players)
        {
            foreach (var player in players)
            {
                if (player.PlayerRole == PlayerRole.Dealer)
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
            int gameId = 0;

            foreach (var round in result)
            {
                var userModel = new PlayerNextRoundView();
                userModel.UserName = round.Key;

                foreach (var item in round)
                {
                    var cardViewModel = new CardGameView();
                    PlayerGames playerGames = await GetPlayerStatus(item.PlayerId, item.GameId);

                    userModel.PlayerId = item.PlayerId;
                    userModel.GameId = item.GameId;
                    gameId = item.GameId;
                    userModel.PlayerRole = (PlayerRole)item.Player.PlayerRole;
                    userModel.PlayerStatus = (PlayerStatus)playerGames.Status;

                    cardViewModel.Rank = item.Card.Rank.ToString();
                    cardViewModel.Suit = item.Card.Suit.ToString();
                    cardViewModel.Value = item.Card.Value;
                    userModel.CardSum += item.Card.Value;

                    userModel.Cards.Add(cardViewModel);
                }
                roundViewModel.Users.Add(userModel);
            }
            roundViewModel.GameId = gameId;

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
                    player.PlayerStatus = PlayerStatus.Winner;
                }
                if (player.CardSum > twentyOnePoint) //check for more than twenty one
                {
                    player.PlayerStatus = PlayerStatus.Lose;
                }
            }
        }
    }
}
