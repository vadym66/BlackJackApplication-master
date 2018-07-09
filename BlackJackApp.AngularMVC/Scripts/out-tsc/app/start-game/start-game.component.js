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
var start_game_service_1 = require("./start-game.service");
var StartGame = /** @class */ (function () {
    function StartGame(startGameService) {
        this.startGameService = startGameService;
        this.title = 'here the game is started';
        this.botItems = [0, 1, 2, 3, 4, 5];
    }
    StartGame.prototype.ngOnInit = function () {
        var _this = this;
        this.startGameService.getPlayers()
            .subscribe(function (data) {
            _this.users = data;
            console.log(_this.users);
        });
    };
    StartGame.prototype.onButtonClick = function () {
        this.title = 'OOOpppss';
        console.log(this.users);
    };
    StartGame = __decorate([
        core_1.Component({
            selector: 'start-game',
            templateUrl: './start-game.component.html',
            providers: [start_game_service_1.StartGameService],
            styleUrls: ['./start-game.component.css']
        }),
        __metadata("design:paramtypes", [start_game_service_1.StartGameService])
    ], StartGame);
    return StartGame;
}());
exports.StartGame = StartGame;
//    model: StartGameView = new StartGameView();
//    constructor(private gameService: GameService) {
//    }
//    ngOnInit() {
//        this.gameService.getUsers().sunscribe(result => {
//            this.model.users = result;
//        })
//    }
//    onButtonClick() {
//        this.title = 'Hello from Kendo UI!';
//        this.gameService.createGame(this.model).subscribe(result => {
//            this.router.navigate();
//        })
//    }
//}
//export class StartGameView {
//    userName: string;
//    botsQuantity: number;
//}
//export class GameService{
//}
//# sourceMappingURL=start-game.component.js.map