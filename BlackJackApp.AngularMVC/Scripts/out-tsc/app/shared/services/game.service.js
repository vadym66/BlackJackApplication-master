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
var http_1 = require("@angular/common/http");
var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
        this.url = 'http://localhost:54796/game/';
    }
    GameService.prototype.getPlayers = function () {
        return this.http.get(this.url + 'getPlayers');
    };
    GameService.prototype.createGame = function (startModel) {
        return this.http.post(this.url + 'create', startModel);
    };
    GameService.prototype.getRounds = function (id) {
        return this.http.get(this.url + 'getRounds/' + id);
    };
    GameService.prototype.getNextRound = function (id) {
        return this.http.get(this.url + 'getNextRound/' + id);
    };
    GameService.prototype.getNextRoundForDealer = function (id) {
        return this.http.get(this.url + 'getRoundForDealer/' + id);
    };
    GameService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
//# sourceMappingURL=game.service.js.map