﻿using System.Web;
using System.Web.Optimization;

namespace BlackJackApp.Controllers
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/StartGameView/start-game").Include(
                       "~/Scripts/StartGameView/start-game.js"));

           

            bundles.Add(new ScriptBundle("~/bundles/StartGameView/current-game").Include(
                      "~/Scripts/StartGameView/current-game.js"));

            bundles.Add(new ScriptBundle("~/bundles/HistoryView/history-grid").Include(
                     "~/Scripts/HistoryView/history-grid.js"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/StartGameView/game-finished").Include(
                      "~/Scripts/StartGameView/game-finished.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/jquery.validate*"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css",
                      "~/Content/Flex.css"));

            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                       "~/Scripts/jquery-{version}.js",
                       "~/Scripts/CustomScripts/StickyFooter.js",
                       "~/Scripts/jquery.unobtrusive-ajax.min.js"));
           
        }
    }
}
