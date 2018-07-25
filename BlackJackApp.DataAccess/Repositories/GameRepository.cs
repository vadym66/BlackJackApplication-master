using System.Collections.Generic;
using System.Threading.Tasks;
using BlackJackApp.Connection;
using BlackJackApp.DataAccess.Interfaces;
using BlackJackApp.Entities.Entities;
using Dapper;
using Dapper.Contrib.Extensions;

namespace BlackJackApp.DataAccess.Repositories
{
    public class GameRepository<T> : IGameRepository<Game> where T : Game
    {
        private readonly string _connectionString;
        public GameRepository(string con)
        {
            _connectionString = con;
        }

        public async Task<int> Add(Game game)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                return await connection.InsertAsync(game);
            }
        }

        public async Task<IEnumerable<Game>> GetAll()
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"SELECT TOP 100 *
                            FROM Games
                            ORDER BY Id DESC";

                return await connection.QueryAsync<Game>(sql);
            }
        }

        public async Task<IEnumerable<Game>> GetLastTen(int offset)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
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
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
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
