using BlackJackApp.Services.ServiceInterfaces;
using BlackJackApp.ViewModels;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Http;

namespace BlackJackApp.WebApi.Controllers
{
    [RoutePrefix("game")]
    public class GameController : ApiController
    {
        IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [Route("getPlayers")]
        public async Task<IHttpActionResult> GetPlayers()
        {
            IEnumerable<UserViewModel> result = await _gameService.GetPlayers();
            return Ok(result);
        }


        [Route("create")]
        public async Task<IHttpActionResult> CreateGame(StartGameView startModel)
        {
            var result = await _gameService.StartGameForApi(startModel);
            return Ok(result);
        }

        [Route("getRounds/{id}")]
        public async Task<IHttpActionResult> GetRounds(int id)
        {
            try
            {
                var result = await _gameService.GetRounds(id);
                return Ok(result);
            }
            catch (Exception e)
            {
                throw new Exception($"something went wrong... {e.Message}");
            }
            
        }

        [Route("getNextRound/{id}")]
        public async Task<IHttpActionResult> GetNextRound(int id)
        {
            try
            {
                var result = await _gameService.NextRoundForPlayers(id);
                return Ok(result);
            }
            catch (Exception e)
            {
                throw new Exception($"something went wrong... {e.Message}");
            }

        }

        [Route("getRoundForDealer/{id}")]
        public async Task<IHttpActionResult> GetNextRoundforDealer(int id)
        {
            try
            {
                var result = await _gameService.NextRoundForDealer(id);
                return Ok(result);
            }
            catch (Exception e)
            {
                throw new Exception($"something went wrong... {e.Message}");
            }

        }
    }


}
