using BlackJackApp.DAL.Interfaces;
using BlackJackApp.DataAccess.Interface;
using BlackJackApp.Entities.Entities;
using BlackJackApp.Services.ServiceInterfaces;
using BlackJackApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BlackJackApp.Services.Services
{
    public class HistoryService : IHistoryService
    {
        private IGameRepository<Game> _gameRepository;
        private IRoundRepository<Round> _roundRepository;
        private IPlayersGameRepository<PlayerGames> _playersGameRepository;

        public HistoryService(IGameRepository<Game> gameRepository, IRoundRepository<Round> roundRepository, IPlayersGameRepository<PlayerGames> playerGameRepository)
        {
            _gameRepository = gameRepository;
            _roundRepository = roundRepository;
            _playersGameRepository = playerGameRepository;
        }

        public async Task<IEnumerable<ShowGamesHistoryViewModel>> GetLastTenGames(int offset)
        {
            var query =  await _gameRepository.GetLastTen(offset);

            return await CreateGameHistoryViewModel(query);
        }

        private async Task<IEnumerable<ShowGamesHistoryViewModel>> CreateGameHistoryViewModel(IEnumerable<Game> games)
        {
            var listOfViewModel = new List<ShowGamesHistoryViewModel>();
            foreach (var game in games)
            {
                PlayerGames playerGames = await GetDetailsFromGame(game.Id);

                var gameViewModel = new ShowGamesHistoryViewModel();
                gameViewModel.HumanName = playerGames.Player.Name;
                gameViewModel.GameCreation = playerGames.Game.Date;
                gameViewModel.GameId = game.Id;
                listOfViewModel.Add(gameViewModel);
            }

            return listOfViewModel;
        }

        private async Task<PlayerGames> GetDetailsFromGame(int gameId)
        {
            return await _playersGameRepository.Get(gameId);
        }

        private async Task<IEnumerable<Round>> GetAllRoundsFromParticularGame(int gameId)
        {
            var query = await _roundRepository.GetRounds(gameId);
            if (!query.Any())
            {
                throw new Exception("There is no such game");
            }

            return query;
        }

        public async Task<List<DetailHistoryViewModel>> Details(int gameId)
        {

            var rounds = await GetAllRoundsFromParticularGame(gameId);

            var result = rounds.GroupBy(p => p.Player.Name);
            var playersGame = new PlayerGames();

            var userModelList = new List<DetailHistoryViewModel>();

            foreach (var round in result)
            {
                var userModel = new DetailHistoryViewModel();
                userModel.UserName = round.Key;

                foreach (var item in round)
                {
                    var cardViewModel = new CardHistoryViewItem();

                    cardViewModel.Rank = item.Card.Rank.ToString();
                    cardViewModel.Suit = item.Card.Suit.ToString();
                    userModel.CardSum += item.Card.Value;
                    playersGame = await GetStatusInParticularGame(item.PlayerId, item.GameId);
                    userModel.Cards.Add(cardViewModel);
                }
                userModel.Status = playersGame.Status.ToString();
                userModelList.Add(userModel);
            }
            return userModelList;
        }

        private async Task<PlayerGames> GetStatusInParticularGame(int playerId, int gameId)
        {
            return await _playersGameRepository.GetStatus(playerId, gameId);
        }

    }
}
