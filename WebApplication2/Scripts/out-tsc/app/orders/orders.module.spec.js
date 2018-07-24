"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var orders_module_1 = require("./orders.module");
describe('OrdersModule', function () {
    var ordersModule;
    beforeEach(function () {
        ordersModule = new orders_module_1.OrdersModule();
    });
    it('should create an instance', function () {
        expect(ordersModule).toBeTruthy();
    });
});
//# sourceMappingURL=orders.module.spec.js.map