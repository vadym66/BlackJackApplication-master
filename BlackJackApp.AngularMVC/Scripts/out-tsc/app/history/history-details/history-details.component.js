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
var history_service_1 = require("../../shared/services/history.service");
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
        core_1.Component({
            selector: 'app-history-details',
            templateUrl: './history-details.component.html',
            providers: [history_service_1.HistoryService],
            styleUrls: ['./history-details.component.css']
        }),
        __metadata("design:paramtypes", [history_service_1.HistoryService, router_1.ActivatedRoute, router_1.Router])
    ], HistoryDetailsComponent);
    return HistoryDetailsComponent;
}());
exports.HistoryDetailsComponent = HistoryDetailsComponent;
//# sourceMappingURL=history-details.component.js.map