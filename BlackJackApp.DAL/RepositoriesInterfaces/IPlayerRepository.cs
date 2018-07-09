using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using BlackJackApp.Entities;
using BlackJackApp.Entities.Entities;

namespace BlackJackApp.DataAccess.Interface
{
    public interface IPlayerRepository<T> where T : class
    {
        Task<int> Add(Player player);
        Task<IEnumerable<string>> GetAll();
        Task<Player> GetHuman(string name);
        Task<IEnumerable<Player>> GetBots(int botNumber);
        Task<Player> GetDealer();
    }
}
