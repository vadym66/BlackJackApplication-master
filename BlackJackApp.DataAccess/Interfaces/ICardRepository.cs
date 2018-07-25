using System.Threading.Tasks;
using BlackJackApp.Entities.Entities;

namespace BlackJackApp.DataAccess.Interfaces
{
    public interface ICardRepository<T> where T : class
    {
        Task<Card> GetRandom();
    }
}
