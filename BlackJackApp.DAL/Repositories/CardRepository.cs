using System.Threading.Tasks;
using BlackJackApp.DAL.Dapper;
using BlackJackApp.DataAccess.Interface;
using BlackJackApp.Entities.Entities;
using Dapper;

namespace BlackJackApp.Services
{
    public class CardRepository<T> : ICardRepository<Card> where T : Card
    {
        public async Task<Card> GetRandom()
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection())
            {
                return await connection.QueryFirstAsync<Card>(@"SELECT TOP 1 * 
                                                                FROM Cards 
                                                                ORDER BY newid()");
            }
        }
    }
}
