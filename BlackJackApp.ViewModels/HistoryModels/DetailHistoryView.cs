using BlackJackApp.Services.Enums;
using System.Collections.Generic;

namespace BlackJackApp.ViewModels.HistoryModels
{
    public class DetailHistoryView
    {
        public string UserName { get; set; }

        public string Status { get; set; }

        public int CardSum { get; set; }

        public List<CardHistoryViewItem> Cards { get; set; }

        public DetailHistoryView()
        {
            Cards = new List<CardHistoryViewItem>();
        }
    }

    public class CardHistoryViewItem
    {
        public int Id { get; set; }

        public string Rank { get; set; }

        public string Suit { get; set; }

        public int Value { get; set; }
    }
}