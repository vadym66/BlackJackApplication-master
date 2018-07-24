"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var start_game_module_1 = require("./start-game.module");
describe('OrdersModule', function () {
    var startGameModule;
    beforeEach(function () {
        startGameModule = new start_game_module_1.StartGameModule();
    });
    it('should create an instance', function () {
        expect(startGameModule).toBeTruthy();
    });
});
//# sourceMappingURL=start-game-routing.module.spec.js.map