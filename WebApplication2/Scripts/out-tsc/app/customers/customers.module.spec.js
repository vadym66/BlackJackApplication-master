"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var customers_module_1 = require("./customers.module");
describe('CustomersModule', function () {
    var customersModule;
    beforeEach(function () {
        customersModule = new customers_module_1.CustomersModule();
    });
    it('should create an instance', function () {
        expect(customersModule).toBeTruthy();
    });
});
//# sourceMappingURL=customers.module.spec.js.map