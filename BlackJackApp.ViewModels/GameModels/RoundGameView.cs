using BlackJackApp.ViewModels;
using System.Collections.Generic;

namespace BlackJackApp.Services
{
    public class RoundGameView
    {
        public int GameId { get; set; }

        public bool IsResultComplete { get; set; }

        public List<PlayerNextRoundView> Users { get; set; }

        public RoundGameView()
        {
            Users = new List<PlayerNextRoundView>();
        }
    }
}