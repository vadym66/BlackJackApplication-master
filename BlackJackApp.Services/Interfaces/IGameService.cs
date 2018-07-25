using BlackJackApp.ViewModels;
using BlackJackApp.ViewModels.GameModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJackApp.Services.Interfaces
{
    public interface IGameService
    {
        Task<RoundGameView> CreateNextRoundForPlayers(int gameId);
        Task<RoundGameView> CreateNextRoundForDealer(int gameId);
        Task<UserView> GetPlayers();
        Task<RoundGameView> GetFirstRound(int id);
        Task<int> StartGame(StartGameView viewFromUI);
    }
}
