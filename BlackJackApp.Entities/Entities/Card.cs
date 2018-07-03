using BlackJackApp.Entities.Enums;

namespace BlackJackApp.Entities.Entities
{
    public class Card
    {
        public int Id { get; set; }

        public CardRank Rank { get; set; }

        public CardSuit Suit { get; set; }

        public int Value { get; set; }
    }
}
