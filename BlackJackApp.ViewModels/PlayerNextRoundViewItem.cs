using BlackJackApp.Services.Enums;
using BlackJackApp.ViewModels.Enums;
using System.Collections.Generic;


namespace BlackJackApp.ViewModels
{
    public class PlayerNextRoundViewItem 
    {
        public int GameId { get; set; }

        public int RoundId { get; set; }

        public int PlayerId { get; set; }

        public int CardSum { get; set; }

        public string UserName { get; set; }

        public PlayerStatus PlayerStatus { get; set; }

        public PlayerRole PlayerRole { get; set; }

        public List<CardGameViewItem> Cards { get; set; }

        public PlayerNextRoundViewItem()
        {
            Cards = new List<CardGameViewItem>();
        }
    }
}
