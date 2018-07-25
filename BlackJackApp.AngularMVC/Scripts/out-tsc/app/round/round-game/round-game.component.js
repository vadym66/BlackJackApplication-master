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
var player_status_enum_view_1 = require("../../shared/models/enums/player-status-enum.view");
var RoundGameComponent = /** @class */ (function () {
    function RoundGameComponent(gameService, route, router) {
        this.gameService = gameService;
        this.route = route;
        this.router = router;
    }
    RoundGameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.gameId = id;
        });
        this.gameService.getRounds(this.gameId).subscribe(function (result) {
            _this.roundView = result;
            _this.complete = _this.roundView.isResultComplete;
            console.log(player_status_enum_view_1.PlayerStatusEnumView[3]);
        });
    };
    RoundGameComponent.prototype.onTakeButtonClick = function () {
        var _this = this;
        this.gameService.getNextRound(this.gameId).subscribe(function (result) {
            _this.roundView = result;
            _this.complete = _this.roundView.isResultComplete;
        });
    };
    RoundGameComponent.prototype.onEnoughButtonClick = function () {
        var _this = this;
        this.gameService.getNextRoundForDealer(this.gameId).subscribe(function (result) {
            _this.roundView = result;
            _this.complete = _this.roundView.isResultComplete;
        });
    };
    RoundGameComponent.prototype.onFinishButtonClick = function () {
        this.router.navigate(['/start']);
    };
    RoundGameComponent.prototype.onHistoryButtonClick = function () {
        this.router.navigate(['/history']);
    };
    RoundGameComponent.prototype.getStatus = function (item) {
        return player_status_enum_view_1.PlayerStatusEnumView[item];
    };
    RoundGameComponent = __decorate([
        core_1.Component({
            selector: 'round-game',
            providers: [game_service_1.GameService],
            templateUrl: './round-game.component.html',
            styleUrls: ['./round-game.component.css']
        }),
        __metadata("design:paramtypes", [game_service_1.GameService, router_1.ActivatedRoute, router_1.Router])
    ], RoundGameComponent);
    return RoundGameComponent;
}());
exports.RoundGameComponent = RoundGameComponent;
//# sourceMappingURL=round-game.component.js.map