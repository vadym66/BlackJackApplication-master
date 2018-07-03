using BlackJackApp.Entities.Enums;

namespace BlackJackApp.Entities.Entities
{
    public class Player
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public EntityPlayerRole PlayerRole { get; set; }
    }
}
