using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJackApp.Connection;
using BlackJackApp.DataAccess.Interfaces;
using BlackJackApp.Entities.Entities;
using Dapper;

namespace BlackJackApp.DataAccess.Repositories
{
    public class RoundRepository<T> : IRoundRepository<Round> where T : Round
    {
        private readonly string _connectionString;
        public RoundRepository(string con)
        {
            _connectionString = con;
        }

        public async Task<int> Add(Round round, int gameId)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"INSERT INTO Rounds(PlayerId, CardId, GameId) 
                            OUTPUT Inserted.ID 
                            VALUES(@PlayerId, @CardId, @gameId)";

                return (await connection.QueryAsync<int>(sql, new { PlayerId = round.PlayerId , CardId = round.CardId, gameid = gameId })).Single();
            }
        }

        public async Task<List<Round>> GetRounds(int gameId)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"SELECT *
                            FROM Rounds
                            JOIN Players ON Rounds.PlayerId = Players.Id
                            JOIN Cards ON Rounds.CardId = Cards.Id
                            WHERE Rounds.GameId = @Id";

                return (await connection.QueryAsync<Round, Player, Card, Round>(sql, 
                                                                              (round, player, card) =>
                                                                                    {
                                                                                        round.Card = card;
                                                                                        round.Player = player;
                                                                                        return round;
                                                                                    }, new { Id = gameId })).ToList();
            }
        }

        public async Task<List<Round>> GetRoundsForPlayer(int gameId, string name)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection(_connectionString))
            {
                var sql = @"SELECT *
                            FROM Rounds
                            JOIN Players ON Rounds.PlayerId = Players.Id
                            JOIN Cards ON Rounds.CardId = Cards.Id
                            WHERE Rounds.GameId = @Id AND Players.Name = @Name";

                return (await connection.QueryAsync<Round, Player, Card, Round>(sql,
                                                                              (round, player, card) =>
                                                                              {
                                                                                  round.Card = card;
                                                                                  round.Player = player;
                                                                                  return round;
                                                                              }, new { Id = gameId, Name = name })).ToList();
            }
        }
    }
}
