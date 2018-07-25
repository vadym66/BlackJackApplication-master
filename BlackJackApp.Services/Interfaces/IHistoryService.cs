using BlackJackApp.ViewModels.HistoryModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJackApp.Services.ServiceInterfaces
{
    public interface IHistoryService
    { 
        Task<List<DetailHistoryView>> Details(int gameId);
        Task<IEnumerable<ShowGamesHistoryView>> GetLastTenGames(int offset);
        Task<IEnumerable<ShowGamesHistoryView>> GetAllGames();
    }
}
