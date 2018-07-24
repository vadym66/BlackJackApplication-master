using BlackJackApp.Services.ServiceInterfaces;
using System.Threading.Tasks;
using System.Web.Http;

namespace BlackJackApp.WebApi.Controllers
{
    [RoutePrefix("history")]
    public class HistoryController : ApiController
    {
        IHistoryService _historyService;
        public HistoryController(IHistoryService historyService)
        {
            _historyService = historyService;
        }

        [HttpGet]
        [Route("get")]
        public async Task<IHttpActionResult> GetGames()

        {
            var games = await _historyService.GetAllGames();
            return Ok(games);
            
        }

        [HttpGet]
        [Route("details/{id}")]
        public async Task<IHttpActionResult> Details(int id)
        {
            var result = await _historyService.Details(id);

            return Ok(result);
        }
    }
}
