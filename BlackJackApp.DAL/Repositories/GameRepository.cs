using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJackApp.DAL.Dapper;
using BlackJackApp.DataAccess.Interface;
using BlackJackApp.Entities.Entities;
using Dapper;
using Dapper.Contrib.Extensions;

namespace BlackJackApp.Services
{
    public class GameRepository<T> : IGameRepository<Game> where T : Game
    {
        public async Task<int> Add(Game game)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection())
            {
                return await connection.InsertAsync(game);
            }
        }

        public async Task<IEnumerable<Game>> GetAll()
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection())
            {
                var sql = @"SELECT TOP 100 *
                            FROM Games
                            ORDER BY Id DESC";

                return await connection.QueryAsync<Game>(sql);
            }
        }

        public async Task<IEnumerable<Game>> GetLastTen(int offset)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection())
            {
                var sql =   @"SELECT *      
                            FROM Games
                            ORDER BY Id DESC
                            OFFSET @offset ROWS
                            FETCH NEXT 10 ROWS ONLY";

                return await connection.QueryAsync<Game>(sql, new { offset = offset});
            }
        }

        public async Task<IEnumerable<Player>> Get(int gameId)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection())
            {
                var sql = @"SELECT Players.Name
                            FROM PlayerGames
                            LEFT JOIN Players ON PlayerGames.PlayerId = Players.Id
                            WHERE PlayerGames.GameId = @Id";

                return await connection.QueryAsync<Player>(sql, new { Id = gameId });
            }
        }

    }
}
