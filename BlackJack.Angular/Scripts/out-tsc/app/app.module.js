"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
var kendo_angular_inputs_1 = require("@progress/kendo-angular-inputs");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var app_component_1 = require("./app.component");
var router_1 = require("../../node_modules/@angular/router");
var start_game_component_1 = require("./game/start-game/start-game.component");
var history_grid_component_1 = require("./history/history-grid/history-grid.component");
var round_game_component_1 = require("./game/round-game/round-game.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                start_game_component_1.StartGame,
                history_grid_component_1.HistoryGrid
            ],
            imports: [
                platform_browser_1.BrowserModule,
                kendo_angular_buttons_1.ButtonsModule,
                kendo_angular_inputs_1.InputsModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                router_1.RouterModule.forRoot([
                    { path: 'start', component: start_game_component_1.StartGame },
                    { path: 'history', component: history_grid_component_1.HistoryGrid },
                    { path: 'round/:id', component: round_game_component_1.RoundGame },
                    { path: '**', redirectTo: 'start', pathMatch: 'full' }
                ])
            ],
            providers: [{ provide: common_1.APP_BASE_HREF, useValue: '/' }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map