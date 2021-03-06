﻿using BlackJackApp.Entities.Entities;
using System.Threading.Tasks;

namespace BlackJackApp.DataAccess.Interfaces
{
    public interface IPlayersGameRepository<T> where T : class
    {
        Task AddPlayer(Player player, int gameId);
        Task<PlayerGames> GetStatus(int playerId, int gameId);
        Task<PlayerGames> Get(int gameId);
        Task UpdateStatus(int gameId, int playerId, int playerStatus);
    }
}
