﻿namespace BlackJackApp.Entities.Entities
{
    public class Round
    {
        public int Id { get; set; }
        
        public int PlayerId { get; set; }

        public int CardId { get; set; }

        public int GameId { get; set; }

        public virtual Card Card { get; set; }

        public virtual Player Player { get; set; }
    }
}