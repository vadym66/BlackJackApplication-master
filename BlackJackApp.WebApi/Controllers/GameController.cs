using BlackJackApp.Services.ServiceInterfaces;
using BlackJackApp.ViewModels;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace BlackJackApp.WebApi.Controllers
{
    [EnableCors(origins: "http://localhost:54796", headers: "*", methods: "*")]
    public class GameController : ApiController
    {
        IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        [HttpGet]
        public async Task<IHttpActionResult> GetPlayers()
        {
            IEnumerable<User> result = await _gameService.GetPlayers();
            return Ok(result);
            //string json = JsonConvert.SerializeObject(result);
            //return json;
        }
    }

    
}
