﻿using BlackJackApp.Services.Interfaces;
using Newtonsoft.Json;
using System.Threading.Tasks;
using System.Web.Mvc;

namespace BlackJackApp.Controllers.Controllers
{
    public class HistoryController : Controller
    {
        IHistoryService _historyService;

        public HistoryController(IHistoryService historyService)
        {
            _historyService = historyService;
        }        
        
        public async Task<string> GetGames()
        {
            var games = await _historyService.GetLastTenGames(offset: 0);

            string json = JsonConvert.SerializeObject(games);
            return json;
        }

        public async Task<ActionResult> Details(int id)
        {
            var result = await _historyService.Details(id);

            return View(result);
        }

        public async Task<ActionResult> ShowGames()
        {
            var games = await _historyService.GetLastTenGames(offset: 0);

            return View(games);
        }
        
        public async Task<string> GetNextGames(int offset)
        {
            var games = await _historyService.GetLastTenGames(offset);

            string json = JsonConvert.SerializeObject(games);
            return json;
        }
    }
}