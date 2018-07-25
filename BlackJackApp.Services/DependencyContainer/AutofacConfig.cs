using Autofac;
using BlackJackApp.DataAccess.Interfaces;
using BlackJackApp.DataAccess.Repositories;
using BlackJackApp.Entities.Entities;
using BlackJackApp.Services;
using BlackJackApp.Services.Interfaces;
using BlackJackApp.Services.Services;

namespace BlackJackApp.Controllers.Util
{
    public static class AutofacConfig
    {
        public static void ConfigureContainer(ContainerBuilder builder, string connectionString)
        {
            builder.Register(c => new PlayerRepository<Player>(connectionString))
                .As<IPlayerRepository<Player>>()
                .InstancePerRequest();
            builder.Register(c => new GameRepository<Game>(connectionString))
                .As<IGameRepository<Game>>()
                .InstancePerRequest();
            builder.Register(c => new RoundRepository<Round>(connectionString))
                .As<IRoundRepository<Round>>()
                .InstancePerRequest();
            builder.Register(c => new CardRepository<Card>(connectionString))
                .As<ICardRepository<Card>>()
                .InstancePerRequest(); 
            builder.Register(c => new PlayersGameRepository<PlayerGames>(connectionString))
                .As<IPlayersGameRepository<PlayerGames>>()
                .InstancePerRequest();

            builder.RegisterType<GameService>().As<IGameService>();
            builder.RegisterType<HistoryService>().As<IHistoryService>();
        }
    }
}