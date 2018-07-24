using BlackJackApp.Services.ServiceInterfaces;
using BlackJackApp.ViewModels;
using Newtonsoft.Json;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace BlackJackApp.Controllers.Controllers
{
    public class GameController : Controller
    {
        private IGameService _gameService;

        public GameController(IGameService gameService)
        {
            _gameService = gameService;
        }

        public async Task<ActionResult> Start()
        {
            return View();
        }

        [HttpPost]
        public async Task<ActionResult> CurrentGame(StartGameView viewModel)
        {
            var result = await _gameService.StartGame(viewModel);
            if (result.IsResultComplete)
            {
                return View("GameFinnished", result);
            }

            return View(result);
        }

        [HttpPost]
        public async Task<ActionResult> StartRoundForPlayers(int gameId)
        {
            var result = await _gameService.NextRoundForPlayers(gameId);
            ModelState.Clear();
            if (result.IsResultComplete)
            {
                return Json(new { gameId = gameId,
                    result = result.IsResultComplete,
                    url = Url.Action("StartRoundForDealer", "Game",
                                        new { gameId = gameId })});
            }

            return PartialView(result);
        }

        public async Task<ActionResult> StartRoundForDealer(int gameId)
        {
            var result = await _gameService.NextRoundForDealer(gameId);
            ModelState.Clear();

            return View("GameFinnished", result);
        }
    }
}
