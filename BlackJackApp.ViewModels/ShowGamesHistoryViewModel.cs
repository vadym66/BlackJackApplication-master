using System;

namespace BlackJackApp.ViewModels
{
    public class ShowGamesHistoryViewModel
    {
        public int GameId { get; set; }

        public string HumanName { get; set; }

        public DateTime? GameCreation { get; set; }
    }
}