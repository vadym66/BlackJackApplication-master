using BlackJackApp.Services.Enums;
using System.Collections.Generic;

namespace BlackJackApp.ViewModels
{
    public class DetailHistoryViewModel
    {
        public string UserName { get; set; }

        public string Status { get; set; }

        public int CardSum { get; set; }

        public List<CardHistoryViewItem> Cards { get; set; }

        public DetailHistoryViewModel()
        {
            Cards = new List<CardHistoryViewItem>();
        }
    }
}