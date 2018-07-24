using BlackJackApp.Services.Enums;
using System.Collections.Generic;

namespace BlackJackApp.ViewModels
{
    public class DetailHistoryView
    {
        public string UserName { get; set; }

        public string Status { get; set; }

        public int CardSum { get; set; }

        public List<CardHistoryView> Cards { get; set; }

        public DetailHistoryView()
        {
            Cards = new List<CardHistoryView>();
        }
    }
}