"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var start_game_service_1 = require("./start-game.service");
var StartGameViewModel_1 = require("./StartGameViewModel");
var StartGame = /** @class */ (function () {
    function StartGame(startGameService, router) {
        this.startGameService = startGameService;
        this.router = router;
        this.title = 'here the game is started';
        this.botItems = [0, 1, 2, 3, 4, 5];
        this.users = [];
        this.startModel = new StartGameViewModel_1.StartGameViewModel();
    }
    StartGame.prototype.ngOnInit = function () {
        var _this = this;
        this.startGameService.getPlayers()
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.users[i] = data[i].name;
            }
        });
    };
    StartGame.prototype.onButtonClick = function () {
        var _this = this;
        this.startGameService.createGame(this.startModel).subscribe(function (result) {
            console.log(result);
            _this.router.navigate(['/round', result]);
        });
    };
    StartGame = __decorate([
        core_1.Component({
            selector: 'start-game',
            templateUrl: './start-game.component.html',
            providers: [start_game_service_1.StartGameService],
            styleUrls: ['./start-game.component.css']
        }),
        __metadata("design:paramtypes", [start_game_service_1.StartGameService, router_1.Router])
    ], StartGame);
    return StartGame;
}());
exports.StartGame = StartGame;
//# sourceMappingURL=start-game.component.js.map