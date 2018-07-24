(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./src/app/history/history-details/history-details.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/history/history-details/history-details.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-container {\r\n    padding: 0;\r\n    margin: 0;\r\n    list-style: none;\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n.flex-item {\r\n    padding: 5px;\r\n    width: 200px;\r\n    height: 300px;\r\n    margin-top: 10px;\r\n    line-height: 30px;\r\n    color: black;\r\n    font-size: medium;\r\n}\r\n\r\ndiv {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    text-align: center;\r\n}\r\n\r\n#buttons {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    text-align: center;\r\n    list-style: none;\r\n}\r\n\r\n#buttons button {\r\n        font-size: 20px;\r\n    }\r\n\r\n#buttons li {\r\n        margin-bottom: 4px;\r\n    }\r\n"

/***/ }),

/***/ "./src/app/history/history-details/history-details.component.html":
/*!************************************************************************!*\
  !*** ./src/app/history/history-details/history-details.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"flex-container\">\r\n    <ng-container *ngFor=\"let user of gameDetailsModel\">\r\n        <li class=\"flex-item\" *ngIf=\"user.playerRole!='dealer'\">\r\n            <div style=\"font-weight:bold\">{{ user.userName }}</div>\r\n            <div style=\"font-weight:bold\">Points:{{ user.cardSum }}</div>\r\n            <div *ngFor=\"let card of user.cards\">\r\n                <div>{{card.rank}} / {{card.suit}}</div>\r\n            </div>\r\n            <div style=\"font-weight:bold\">{{ user.status }}</div>\r\n        </li>\r\n    </ng-container>\r\n</ul>\r\n<ul class=\"flex-container\">\r\n    <ng-container *ngFor=\"let user of gameDetailsModel\">\r\n        <li class=\"flex-item\" *ngIf=\"user.userName=='dealer'\">\r\n            <div style=\"font-weight:bold\">{{ user.userName }}</div>\r\n            <div style=\"font-weight:bold\">Points:{{ user.cardSum }}</div>\r\n            <div *ngFor=\"let card of user.cards\">\r\n                <div>{{card.rank}} / {{card.suit}}</div>\r\n            </div>\r\n            <div style=\"font-weight:bold\">{{ user.status }}</div>\r\n        </li>\r\n    </ng-container>\r\n</ul>\r\n\r\n<ul id=\"buttons\">\r\n    <li>\r\n        <button kendoButton (click)=\"onButtonClick()\">back</button>\r\n    </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/history/history-details/history-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/history/history-details/history-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: HistoryDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDetailsComponent", function() { return HistoryDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/history.service */ "./src/app/shared/services/history.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryDetailsComponent = /** @class */ (function () {
    function HistoryDetailsComponent(historyService, route, router) {
        this.historyService = historyService;
        this.route = route;
        this.router = router;
    }
    HistoryDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.gameId = id;
        });
        this.historyService.getDetails(this.gameId).subscribe(function (result) {
            _this.gameDetailsModel = result;
        });
    };
    HistoryDetailsComponent.prototype.onButtonClick = function () {
        this.router.navigate(['/history']);
    };
    HistoryDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-history-details',
            template: __webpack_require__(/*! ./history-details.component.html */ "./src/app/history/history-details/history-details.component.html"),
            providers: [_shared_services_history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"]],
            styles: [__webpack_require__(/*! ./history-details.component.css */ "./src/app/history/history-details/history-details.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_services_history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HistoryDetailsComponent);
    return HistoryDetailsComponent;
}());



/***/ }),

/***/ "./src/app/history/history-grid/history-grid.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/history/history-grid/history-grid.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/history/history-grid/history-grid.component.html":
/*!******************************************************************!*\
  !*** ./src/app/history/history-grid/history-grid.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <kendo-grid detect-scroll\r\n                [data]=\"data\"\r\n                [height]=\"600\">\r\n        <kendo-grid-column field=\"gameId\" title=\"ID\" width=\"100\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column field=\"humanName\" title=\"Player name\" width=\"250\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column [format]=\"mediumDate\" field=\"gameCreation\" title=\"Date of Creation\">\r\n        </kendo-grid-column>\r\n        <kendo-grid-column width=\"300\">\r\n            <ng-template kendoGridCellTemplate let-dataItem>\r\n                <button style=\"text-align:center\" kendoButton (click)=\"onButtonClick(dataItem.gameId)\">Details</button>\r\n            </ng-template>\r\n        </kendo-grid-column>\r\n    </kendo-grid>\r\n</div>"

/***/ }),

/***/ "./src/app/history/history-grid/history-grid.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/history/history-grid/history-grid.component.ts ***!
  \****************************************************************/
/*! exports provided: HistoryGridComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryGridComponent", function() { return HistoryGridComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_history_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/history.service */ "./src/app/shared/services/history.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HistoryGridComponent = /** @class */ (function () {
    function HistoryGridComponent(historyService, router, route) {
        this.historyService = historyService;
        this.router = router;
        this.route = route;
    }
    HistoryGridComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.historyService.getGames().subscribe(function (result) {
            _this.data = result;
            console.log(_this.data);
        });
    };
    HistoryGridComponent.prototype.onButtonClick = function (id) {
        this.router.navigate(['details', id], { relativeTo: this.route });
    };
    HistoryGridComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'history-game-list',
            template: __webpack_require__(/*! ./history-grid.component.html */ "./src/app/history/history-grid/history-grid.component.html"),
            styles: [__webpack_require__(/*! ./history-grid.component.css */ "./src/app/history/history-grid/history-grid.component.css")],
            providers: [_shared_services_history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"]],
        }),
        __metadata("design:paramtypes", [_shared_services_history_service__WEBPACK_IMPORTED_MODULE_1__["HistoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HistoryGridComponent);
    return HistoryGridComponent;
}());



/***/ }),

/***/ "./src/app/history/history-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/history/history-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HistoryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryRoutingModule", function() { return HistoryRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _history_grid_history_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history-grid/history-grid.component */ "./src/app/history/history-grid/history-grid.component.ts");
/* harmony import */ var _history_details_history_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-details/history-details.component */ "./src/app/history/history-details/history-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: '',
        component: _history_grid_history_grid_component__WEBPACK_IMPORTED_MODULE_2__["HistoryGridComponent"]
    },
    {
        path: 'details/:id',
        component: _history_details_history_details_component__WEBPACK_IMPORTED_MODULE_3__["HistoryDetailsComponent"]
    }
];
var HistoryRoutingModule = /** @class */ (function () {
    function HistoryRoutingModule() {
    }
    HistoryRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HistoryRoutingModule);
    return HistoryRoutingModule;
}());



/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _history_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./history-routing.module */ "./src/app/history/history-routing.module.ts");
/* harmony import */ var _history_grid_history_grid_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./history-grid/history-grid.component */ "./src/app/history/history-grid/history-grid.component.ts");
/* harmony import */ var _history_details_history_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history-details/history-details.component */ "./src/app/history/history-details/history-details.component.ts");
/* harmony import */ var _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @progress/kendo-angular-grid */ "./node_modules/@progress/kendo-angular-grid/dist/es/index.js");
/* harmony import */ var _shared_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared-module/shared.module */ "./src/app/shared/shared-module/shared.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HistoryModule = /** @class */ (function () {
    function HistoryModule() {
    }
    HistoryModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _history_routing_module__WEBPACK_IMPORTED_MODULE_2__["HistoryRoutingModule"],
                _progress_kendo_angular_grid__WEBPACK_IMPORTED_MODULE_5__["GridModule"],
                _shared_shared_module_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"]
            ],
            declarations: [_history_grid_history_grid_component__WEBPACK_IMPORTED_MODULE_3__["HistoryGridComponent"], _history_details_history_details_component__WEBPACK_IMPORTED_MODULE_4__["HistoryDetailsComponent"]]
        })
    ], HistoryModule);
    return HistoryModule;
}());



/***/ }),

/***/ "./src/app/shared/services/history.service.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/services/history.service.ts ***!
  \****************************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HistoryService = /** @class */ (function () {
    function HistoryService(http) {
        this.http = http;
        this.url = 'http://localhost:54796/history/';
    }
    HistoryService.prototype.getGames = function () {
        return this.http.get(this.url + 'get');
    };
    HistoryService.prototype.getDetails = function (id) {
        return this.http.get(this.url + 'details/' + id);
    };
    HistoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HistoryService);
    return HistoryService;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module.js.map