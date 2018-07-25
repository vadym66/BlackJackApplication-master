using BlackJackApp.Entities.Entities;
using Dapper;
using System.Threading.Tasks;
using System.Linq;
using BlackJackApp.DataAccess.Interfaces;
using BlackJackApp.Connection;

namespace BlackJackApp.DataAccess.Repositories
{
    public class PlayersGameRepository<T> : IPlayersGameRepository<PlayerGames>
    {
        private readonly string _connectionString;
        public PlayersGameRepository(string con)
        {
            _connectionString = con;
        }

        public async Task AddPlayer(Player player, int gameId)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"INSERT INTO PlayerGames(PlayerId, GameId)
                            VALUES(@PlayerId, @gameId)";

                await connection.ExecuteAsync(sql, new { PlayerId = player.Id, GameId = gameId });
            }
        }

        public async Task UpdateStatus(int gameId, int playerId, int playerStatus)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"UPDATE PlayerGames
                            SET Status = @status
                            WHERE PlayerGames.GameId = @gameId 
                            AND PlayerGames.PlayerId = @playerId";

                await connection.ExecuteAsync(sql, new { gameId = gameId, playerId = playerId, status = playerStatus });
            }
        }

        public async Task<PlayerGames> GetStatus(int playerId, int gameId)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"SELECT *
                            FROM PlayerGames
                            WHERE PlayerId = @PlayerId
                            AND GameId = @GameId";

                return await connection.QuerySingleAsync<PlayerGames>(sql, new { PlayerId = playerId, GameId = gameId });
            }
        }

        public async Task<PlayerGames> Get(int gameId)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"SELECT *
                            FROM PlayerGames
                            JOIN Players ON PlayerGames.PlayerId = Players.Id
                            JOIN Games ON PlayerGames.GameId = Games.Id
                            WHERE PlayerGames.GameId = @id 
                            AND PlayerRole = 0";

                return (await connection.QueryAsync<PlayerGames, Player, Game, PlayerGames>(sql,
                                                                              (playersGame, player, game) =>
                                                                              {
                                                                                  playersGame.Game = game;
                                                                                  playersGame.Player = player;
                                                                                  return playersGame;
                                                                              }, new { Id = gameId })).ToList().FirstOrDefault();
                
            }
        }
    }
}
