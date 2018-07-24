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
var game_service_1 = require("../../shared/services/game.service");
var router_1 = require("../../../../node_modules/@angular/router");
var RoundGame = /** @class */ (function () {
    function RoundGame(startGameService, route) {
        this.startGameService = startGameService;
        this.route = route;
    }
    RoundGame.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.gameId = parseInt(id);
        console.log(this.gameId);
        this.startGameService.getRounds(this.gameId).subscribe(function (result) {
            _this.roundView = result;
            _this.complete = _this.roundView.isResultComplete;
        });
    };
    RoundGame.prototype.onTakeButtonClick = function () {
        var _this = this;
        this.startGameService.getNextRound(this.gameId).subscribe(function (result) {
            _this.roundView = result;
            _this.complete = _this.roundView.isResultComplete;
        });
    };
    RoundGame.prototype.onEnoughButtonClick = function () {
        var _this = this;
        this.startGameService.getNextRoundForDealer(this.gameId).subscribe(function (result) {
            _this.roundView = result;
            _this.complete = _this.roundView.isResultComplete;
        });
    };
    RoundGame.prototype.onFinishButtonClick = function () {
        var _this = this;
        this.startGameService.getNextRound(this.gameId).subscribe(function (result) {
            _this.roundView = result;
            _this.complete = _this.roundView.isResultComplete;
        });
    };
    RoundGame.prototype.onHistoryButtonClick = function () {
        var _this = this;
        this.startGameService.getNextRound(this.gameId).subscribe(function (result) {
            _this.roundView = result;
            _this.complete = _this.roundView.isResultComplete;
        });
    };
    RoundGame = __decorate([
        core_1.Component({
            selector: 'round-game',
            providers: [game_service_1.GameService],
            templateUrl: './round-game.component.html'
        }),
        __metadata("design:paramtypes", [game_service_1.GameService, router_1.ActivatedRoute])
    ], RoundGame);
    return RoundGame;
}());
exports.RoundGame = RoundGame;
//# sourceMappingURL=round-game.component.js.map