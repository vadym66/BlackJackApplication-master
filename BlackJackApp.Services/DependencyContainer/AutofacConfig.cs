using Autofac;
using Autofac.Core;
using Autofac.Integration.Mvc;
using BlackJackApp.DAL.Dapper;
using BlackJackApp.DAL.Interfaces;
using BlackJackApp.DAL.Repositories;
using BlackJackApp.DataAccess.Interface;
using BlackJackApp.Entities.Entities;
using BlackJackApp.Services;
using BlackJackApp.Services.ServiceInterfaces;
using BlackJackApp.Services.Services;
using System.Collections.Generic;
using System.Web.Mvc;

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