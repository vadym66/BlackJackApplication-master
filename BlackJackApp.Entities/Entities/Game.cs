using System;

namespace BlackJackApp.Entities.Entities
{
    public class Game
    {
        public int Id { get; set; }

        public DateTime? Date { get; set; }

        public Game()
        {
            Date = DateTime.Now;
        }
    }
}
