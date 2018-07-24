(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["game-start-game-module"],{

/***/ "./src/app/game/start-game-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/game/start-game-routing.module.ts ***!
  \***************************************************/
/*! exports provided: StartGameRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGameRoutingModule", function() { return StartGameRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start-game/start-game.component */ "./src/app/game/start-game/start-game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_2__["StartGameComponent"]
    }
];
var StartGameRoutingModule = /** @class */ (function () {
    function StartGameRoutingModule() {
    }
    StartGameRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], StartGameRoutingModule);
    return StartGameRoutingModule;
}());



/***/ }),

/***/ "./src/app/game/start-game.module.ts":
/*!*******************************************!*\
  !*** ./src/app/game/start-game.module.ts ***!
  \*******************************************/
/*! exports provided: StartGameModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGameModule", function() { return StartGameModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _start_game_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./start-game-routing.module */ "./src/app/game/start-game-routing.module.ts");
/* harmony import */ var _start_game_start_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start-game/start-game.component */ "./src/app/game/start-game/start-game.component.ts");
/* harmony import */ var _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @progress/kendo-angular-inputs */ "./node_modules/@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-dropdowns */ "./node_modules/@progress/kendo-angular-dropdowns/dist/es/index.js");
/* harmony import */ var _shared_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared-module/shared.module */ "./src/app/shared/shared-module/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var StartGameModule = /** @class */ (function () {
    function StartGameModule() {
    }
    StartGameModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _start_game_routing_module__WEBPACK_IMPORTED_MODULE_2__["StartGameRoutingModule"],
                _progress_kendo_angular_inputs__WEBPACK_IMPORTED_MODULE_4__["InputsModule"],
                _progress_kendo_angular_dropdowns__WEBPACK_IMPORTED_MODULE_5__["DropDownsModule"],
                _shared_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_start_game_start_game_component__WEBPACK_IMPORTED_MODULE_3__["StartGameComponent"]]
        })
    ], StartGameModule);
    return StartGameModule;
}());



/***/ }),

/***/ "./src/app/game/start-game/start-game.component.css":
/*!**********************************************************!*\
  !*** ./src/app/game/start-game/start-game.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#fieldList {\r\n    margin-top: 60px;\r\n}\r\n#fieldList li {\r\n    list-style: none;\r\n    padding-bottom: .7em;\r\n    text-align: left;\r\n    text-align: center;\r\n}\r\nbutton{\r\n    font-size: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/game/start-game/start-game.component.html":
/*!***********************************************************!*\
  !*** ./src/app/game/start-game/start-game.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul id=\"fieldList\">\r\n    <li>\r\n        <kendo-combobox [data]=\"users\"\r\n                        [allowCustom]=\"true\"\r\n                        [(ngModel)]=\"startModel.playerName\"\r\n                        (valueChange)=\"onValueChange($event)\">\r\n        </kendo-combobox>\r\n    </li>\r\n    <li>\r\n        <kendo-dropdownlist [data]=\"botItems\" \r\n                            [value]=\"0\" \r\n                            [(ngModel)]=\"startModel.botQuantity\">\r\n        </kendo-dropdownlist>\r\n    </li>\r\n    <li>\r\n        <button kendoButton (click)=\"onButtonClick()\"\r\n                [disabled]=\"emptyItem\">Start</button>\r\n    </li>\r\n</ul>\r\n\r\n"

/***/ }),

/***/ "./src/app/game/start-game/start-game.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/game/start-game/start-game.component.ts ***!
  \*********************************************************/
/*! exports provided: StartGameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGameComponent", function() { return StartGameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/game.service */ "./src/app/shared/services/game.service.ts");
/* harmony import */ var _shared_models_game_start_game_view__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/models/game/start-game.view */ "./src/app/shared/models/game/start-game.view.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StartGameComponent = /** @class */ (function () {
    function StartGameComponent(startGameService, router) {
        this.startGameService = startGameService;
        this.router = router;
        this.botItems = [0, 1, 2, 3, 4, 5];
        this.users = [];
        this.startModel = new _shared_models_game_start_game_view__WEBPACK_IMPORTED_MODULE_3__["StartGameView"]();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'start-game',
            template: __webpack_require__(/*! ./start-game.component.html */ "./src/app/game/start-game/start-game.component.html"),
            providers: [_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]],
            styles: [__webpack_require__(/*! ./start-game.component.css */ "./src/app/game/start-game/start-game.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], StartGameComponent);
    return StartGameComponent;
}());



/***/ }),

/***/ "./src/app/shared/models/game/start-game.view.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/models/game/start-game.view.ts ***!
  \*******************************************************/
/*! exports provided: StartGameView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartGameView", function() { return StartGameView; });
var StartGameView = /** @class */ (function () {
    function StartGameView() {
    }
    return StartGameView;
}());



/***/ })

}]);
//# sourceMappingURL=game-start-game-module.js.map