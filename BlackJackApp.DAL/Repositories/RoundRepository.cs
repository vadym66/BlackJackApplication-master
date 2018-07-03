﻿using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BlackJackApp.DAL.Dapper;
using BlackJackApp.DataAccess.Interface;
using BlackJackApp.Entities.Entities;
using Dapper;

namespace BlackJackApp.Services
{
    public class RoundRepository<T> : IRoundRepository<Round> where T : Round
    {
        public async Task<int> Add(Round round, int gameId)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection())
            {
                var sql = @"INSERT INTO Rounds(PlayerId, CardId, GameId) 
                            OUTPUT Inserted.ID 
                            VALUES(@PlayerId, @CardId, @gameId)";

                return (await connection.QueryAsync<int>(sql, new { PlayerId = round.PlayerId , CardId = round.CardId, gameid = gameId })).Single();
            }
        }

        public async Task<List<Round>> GetRounds(int gameId)
        {
            using (var connection = ConnectionFactory.GetOpenDbConnection())
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
            using (var connection = ConnectionFactory.GetOpenDbConnection())
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
