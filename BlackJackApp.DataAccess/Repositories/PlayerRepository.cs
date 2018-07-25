using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJackApp.Connection;
using BlackJackApp.DataAccess.Interfaces;
using BlackJackApp.Entities.Entities;
using Dapper;
using Dapper.Contrib.Extensions;

namespace BlackJackApp.DataAccess.Repositories
{
    public class PlayerRepository<T> : IPlayerRepository<Player> where T : Player
    {
        private readonly string _connectionString;
        public PlayerRepository(string con)
        {
            _connectionString = con;
        }


        public async Task<int> Add(Player player)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                return await connection.InsertAsync(player);
            }
        }

        public async Task<IEnumerable<string>> GetAll()
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"SELECT DISTINCT  Players.Name 
                            FROM Players
                            WHERE PlayerRole = 0";

                return await connection.QueryAsync<string>(sql);
            }
        }

        public async Task<Player> GetHuman(string name)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"SELECT Players.Id, Players.Name, Players.PlayerRole
                            FROM Players
                            WHERE Players.Name = @name";

                return (await connection.QueryAsync<Player>(sql, new { name = name })).FirstOrDefault();
            }
        }

        public async Task<IEnumerable<Player>> GetBots(int botNumber)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"SELECT TOP (@BotNumber) * 
                            FROM Players 
                            WHERE Players.Id 
                            BETWEEN 2 AND 6";

                return await connection.QueryAsync<Player>(sql, new { BotNumber = botNumber });
            }
        }

        public async Task<Player> GetDealer()
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"SELECT *
                            FROM Players
                            WHERE Players.Id = 1";

                return await connection.QuerySingleAsync<Player>(sql);
            }
        }
    }
}
