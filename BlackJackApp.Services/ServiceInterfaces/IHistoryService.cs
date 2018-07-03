using BlackJackApp.ViewModels;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace BlackJackApp.Services.ServiceInterfaces
{
    public interface IHistoryService
    { 
        Task<List<DetailHistoryViewModel>> Details(int gameId);
        Task<IEnumerable<ShowGamesHistoryViewModel>> GetLastTenGames(int offset);
    }
}
