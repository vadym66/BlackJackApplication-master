"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var kendo_angular_buttons_1 = require("@progress/kendo-angular-buttons");
var kendo_angular_inputs_1 = require("@progress/kendo-angular-inputs");
var animations_1 = require("@angular/platform-browser/animations");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var app_component_1 = require("./app.component");
var start_game_component_1 = require("../app/start-game/start-game.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                start_game_component_1.StartGame
            ],
            imports: [
                platform_browser_1.BrowserModule,
                kendo_angular_buttons_1.ButtonsModule,
                kendo_angular_inputs_1.InputsModule,
                animations_1.BrowserAnimationsModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                http_1.HttpClientModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map