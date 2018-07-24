"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var history_module_1 = require("./history.module");
describe('OrdersModule', function () {
    var historyModule;
    beforeEach(function () {
        historyModule = new history_module_1.HistoryModule();
    });
    it('should create an instance', function () {
        expect(historyModule).toBeTruthy();
    });
});
//# sourceMappingURL=history-routing.module.spec.js.map