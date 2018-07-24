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
var ScrollTrackerDirective = /** @class */ (function () {
    function ScrollTrackerDirective() {
    }
    ScrollTrackerDirective.prototype.onScroll = function (event) {
        // do tracking
        // console.log('scrolled', event.target.scrollTop);
        // Listen to click events in the component
        var tracker = event.target;
        var limit = tracker.scrollHeight - tracker.clientHeight;
        console.log(event.target.scrollTop, limit);
        if (event.target.scrollTop === limit) {
            alert('end reached');
        }
    };
    __decorate([
        core_1.HostListener('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ScrollTrackerDirective.prototype, "onScroll", null);
    ScrollTrackerDirective = __decorate([
        core_1.Directive({
            selector: '[scrollTracker]'
        }),
        __metadata("design:paramtypes", [])
    ], ScrollTrackerDirective);
    return ScrollTrackerDirective;
}());
exports.ScrollTrackerDirective = ScrollTrackerDirective;
//# sourceMappingURL=scroll-tracker.js.map