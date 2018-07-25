using BlackJackApp.Services.Enums;
using BlackJackApp.ViewModels.Enums;
using System.Collections.Generic;

namespace BlackJackApp.ViewModels.GameModels
{
    public class RoundGameView
    {
        public int GameId { get; set; }

        public bool IsResultComplete { get; set; }

        public List<PlayerNextRoundViewItem> Users { get; set; }

        public RoundGameView()
        {
            Users = new List<PlayerNextRoundViewItem>();
        }
    }

    public class PlayerNextRoundViewItem
    {
        public int GameId { get; set; }

        public int PlayerId { get; set; }

        public int CardSum { get; set; }

        public string UserName { get; set; }

        public PlayerStatusEnumView PlayerStatus { get; set; }

        public PlayerRoleEnumView PlayerRole { get; set; }

        public List<CardGameViewItem> Cards { get; set; }

        public PlayerNextRoundViewItem()
        {
            Cards = new List<CardGameViewItem>();
        }
    }

    public class CardGameViewItem
    {
        public int Id { get; set; }

        public string Rank { get; set; }

        public string Suit { get; set; }

        public int Value { get; set; }
    }
}