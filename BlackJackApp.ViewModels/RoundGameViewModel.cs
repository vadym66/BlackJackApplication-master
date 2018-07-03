using BlackJackApp.ViewModels;
using System.Collections.Generic;

namespace BlackJackApp.Services
{
    public class RoundGameViewModel
    {
        public int GameId { get; set; }

        public bool isResultComplete { get; set; }

        public List<PlayerNextRoundViewItem> Users { get; set; }

        public RoundGameViewModel()
        {
            Users = new List<PlayerNextRoundViewItem>();
        }
    }
}