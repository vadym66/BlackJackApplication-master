"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var StartGame = /** @class */ (function () {
    function StartGame() {
        this.title = 'here the game is started';
        this.listItems = [0, 1, 2, 3, 4, 5];
    }
    StartGame.prototype.onButtonClick = function () {
        this.title = 'Hello from Kendo UI!';
    };
    StartGame = __decorate([
        core_1.Component({
            selector: 'start-game',
            templateUrl: './start-game.component.html',
            styleUrls: ['./start-game.component.css']
        })
    ], StartGame);
    return StartGame;
}());
exports.StartGame = StartGame;
//# sourceMappingURL=start-game.component.js.map