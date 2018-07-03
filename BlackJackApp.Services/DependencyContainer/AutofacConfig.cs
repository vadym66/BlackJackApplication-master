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
            builder.RegisterType<ConnectionFactory>().WithParameter(new NamedParameter("connectionString", connectionString));

            builder.RegisterType<PlayerRepository<Player>>()
                    .As<IPlayerRepository<Player>>()
                    .PreserveExistingDefaults()
                    .WithParameter(new TypedParameter(typeof(string),connectionString));

            builder.RegisterType<GameRepository<Game>>()
                    .As<IGameRepository<Game>>()
                    .PreserveExistingDefaults()
                    .WithParameter(new TypedParameter(typeof(string), connectionString)); ;

            builder.RegisterType<RoundRepository<Round>>()
                    .As<IRoundRepository<Round>>()
                    .PreserveExistingDefaults()
                    .WithParameter(new TypedParameter(typeof(string), connectionString)); ;

            builder.RegisterType<CardRepository<Card>>()
                    .As<ICardRepository<Card>>()
                    .PreserveExistingDefaults()
                    .WithParameter(new TypedParameter(typeof(string), connectionString)); ;

            builder.RegisterType<PlayersGameRepository<PlayerGames>>()
                    .As<IPlayersGameRepository<PlayerGames>>()
                    .PreserveExistingDefaults()
                    .WithParameter(new TypedParameter(typeof(string), connectionString)); ;

            builder.RegisterType<GameService>()
                .As<IGameService>()
                .PreserveExistingDefaults()
                .WithParameters(new List<Parameter>()
                                    { new NamedParameter("gameRepository", new GameRepository<Game>()),
                                      new NamedParameter("playerRepository", new PlayerRepository<Player>()),
                                      new NamedParameter("roundRepository", new RoundRepository<Round>()),
                                      new NamedParameter("cardRepository", new CardRepository<Card>()),
                                      new NamedParameter("playersGameRepository", new PlayersGameRepository<PlayerGames>())
                                    });

            builder.RegisterType<HistoryService>()
                .As<IHistoryService>()
                .PreserveExistingDefaults()
                .WithParameters(new List<Parameter>()
                                    {
                                      new NamedParameter("playerGameRepository", new PlayersGameRepository<PlayerGames>())
                                    });

            var container = builder.Build();

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
        }
    }
}