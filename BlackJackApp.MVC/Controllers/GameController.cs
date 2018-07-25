using BlackJackApp.ViewModels.GameModels;
using System.Threading.Tasks;
using System.Web.Mvc;
using BlackJackApp.Services.Interfaces;
using Newtonsoft.Json;
using System.Linq;

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
            var names = (await _gameService.GetPlayers()).Users.Select(p => p.Name).ToList();
            return View("StartGame", names);
        }

        public async Task<ActionResult> StartGame(StartGameView viewModel)
        {
            var gameId = await _gameService.StartGame(viewModel);
            return RedirectToAction("GetFirstRound", new { id = gameId });
        }

        public async Task<ActionResult> GetFirstRound(int id)
        {
            var result = await _gameService.GetFirstRound(id);
            if (result.IsResultComplete)
            {
                return View("GameFinnished", result);
            }

            return View("CurrentGame", result);
        }

        [HttpPost]
        public async Task<ActionResult> CreateNextRoundForPlayers(int gameId)
        {
            var result = await _gameService.CreateNextRoundForPlayers(gameId);
            ModelState.Clear();
            if (result.IsResultComplete)
            {
                return Json(new {
                                gameId = gameId,
                                result = result.IsResultComplete,
                                url = Url.Action("CreateNextRoundForDealer", "Game", new { gameId = gameId })
                                });
            }

            return PartialView(result);
        }

        public async Task<ActionResult> CreateNextRoundForDealer(int gameId)
        {
            var result = await _gameService.CreateNextRoundForDealer(gameId);
            ModelState.Clear();

            return View("GameFinnished", result);
        }
    }
}
