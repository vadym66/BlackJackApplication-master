using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BlackJackApp.ViewModels
{
    public class CardHistoryViewItem
    {
        public int Id { get; set; }

        public string Rank { get; set; }

        public string Suit { get; set; }

        public int Value { get; set; }
    }
}
