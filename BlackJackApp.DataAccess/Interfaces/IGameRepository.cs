using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJackApp.Entities.Entities;

namespace BlackJackApp.DataAccess.Interfaces
{
    public interface IGameRepository<T> where T : class
    {
        Task<int> Add(Game game);
        Task<IEnumerable<Game>> GetAll();
        Task<IEnumerable<Game>> GetLastTen(int offset);
        Task<IEnumerable<Player>> Get(int gameId);
    }
}
