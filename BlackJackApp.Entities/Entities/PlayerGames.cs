using BlackJackApp.Entities.Enums;

namespace BlackJackApp.Entities.Entities
{
    public class PlayerGames
    {
        public int Id { get; set; }

        public int PlayerId { get; set; }

        public int GameId { get; set; }

        public int CardSum { get; set; }

        public virtual Game Game { get; set; }

        public virtual Player Player { get; set; }

        public EntityPlayerStatus Status { get; set; }
    }
}
