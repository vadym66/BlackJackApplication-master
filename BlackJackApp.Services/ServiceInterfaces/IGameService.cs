using BlackJackApp.ViewModels;
using System.Threading.Tasks;

namespace BlackJackApp.Services.ServiceInterfaces
{
    public interface IGameService
    {
        Task<RoundGameViewModel> StartGame(StartGameViewModel viewFromUI);
        Task<RoundGameViewModel> NextRoundForPlayers(int gameId);
        Task<RoundGameViewModel> NextRoundForDealer(int gameId);
    }
}
