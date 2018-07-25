using System;

namespace BlackJackApp.ViewModels.HistoryModels
{
    public class ShowGamesHistoryView
    {
        public int GameId { get; set; }

        public string HumanName { get; set; }

        public DateTime? GameCreation { get; set; }
    }
}