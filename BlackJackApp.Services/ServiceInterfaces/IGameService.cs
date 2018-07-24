using BlackJackApp.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJackApp.Services.ServiceInterfaces
{
    public interface IGameService
    {
        Task<RoundGameView> StartGame(StartGameView viewFromUI);
        Task<RoundGameView> NextRoundForPlayers(int gameId);
        Task<RoundGameView> NextRoundForDealer(int gameId);
        Task<IEnumerable<UserViewModel>> GetPlayers();
        Task<RoundGameView> GetRounds(int id);
        Task<int> StartGameForApi(StartGameView viewFromUI);
    }
}
