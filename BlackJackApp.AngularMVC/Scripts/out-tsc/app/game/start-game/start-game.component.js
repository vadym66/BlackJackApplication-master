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
var game_service_1 = require("../../shared/services/game.service");
var start_game_view_1 = require("../../shared/models/game/start-game.view");
var StartGameComponent = /** @class */ (function () {
    function StartGameComponent(startGameService, router) {
        this.startGameService = startGameService;
        this.router = router;
        this.botItems = [0, 1, 2, 3, 4, 5];
        this.users = [];
        this.startModel = new start_game_view_1.StartGameView();
    }
    StartGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.emptyItem = true;
        this.startGameService.getPlayers()
            .subscribe(function (data) {
            for (var i = 0; i < data.length; i++) {
                _this.users[i] = data[i].name;
            }
        });
    };
    StartGameComponent.prototype.onButtonClick = function () {
        var _this = this;
        this.startGameService.createGame(this.startModel).subscribe(function (result) {
            console.log(result);
            _this.router.navigate(['/round', result]);
        });
    };
    StartGameComponent.prototype.onValueChange = function (value) {
        if (value == null) {
            this.emptyItem = true;
        }
        else {
            this.emptyItem = false;
        }
    };
    StartGameComponent = __decorate([
        core_1.Component({
            selector: 'start-game',
            templateUrl: './start-game.component.html',
            providers: [game_service_1.GameService],
            styleUrls: ['./start-game.component.css']
        }),
        __metadata("design:paramtypes", [game_service_1.GameService, router_1.Router])
    ], StartGameComponent);
    return StartGameComponent;
}());
exports.StartGameComponent = StartGameComponent;
//# sourceMappingURL=start-game.component.js.map