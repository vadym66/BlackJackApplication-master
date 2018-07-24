"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var start_game_routing_module_1 = require("./start-game-routing.module");
var start_game_component_1 = require("./start-game/start-game.component");
var kendo_angular_inputs_1 = require("@progress/kendo-angular-inputs");
var kendo_angular_dropdowns_1 = require("@progress/kendo-angular-dropdowns");
var shared_module_1 = require("../shared/shared-module/shared.module");
var StartGameModule = /** @class */ (function () {
    function StartGameModule() {
    }
    StartGameModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                start_game_routing_module_1.StartGameRoutingModule,
                kendo_angular_inputs_1.InputsModule,
                kendo_angular_dropdowns_1.DropDownsModule,
                shared_module_1.SharedModule
            ],
            declarations: [start_game_component_1.StartGameComponent]
        })
    ], StartGameModule);
    return StartGameModule;
}());
exports.StartGameModule = StartGameModule;
//# sourceMappingURL=start-game.module.js.map