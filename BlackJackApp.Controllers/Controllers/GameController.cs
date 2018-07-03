using BlackJackApp.Services.ServiceInterfaces;
using BlackJackApp.ViewModels;
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
        public async Task<ActionResult> CurrentGame(StartGameViewModel viewModel)
        {
            var result = await _gameService.StartGame(viewModel);
            if (result.isResultComplete)
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
            if (result.isResultComplete)
            {
                return Json(new { gameId = gameId,
                    result = result.isResultComplete,
                    url = Url.Action(
                                                "StartRoundForDealer",
                                                "Game",
                                                new { gameId = gameId }) }
                                                );
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
