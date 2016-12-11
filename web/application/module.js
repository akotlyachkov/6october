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
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var routing_1 = require("./pages/routing");
var layout_1 = require("./pages/layout/layout");
var InitModule = (function () {
    function InitModule() {
    }
    return InitModule;
}());
InitModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, routing_1.RoutingModule],
        bootstrap: [layout_1.Layout]
    }),
    __metadata("design:paramtypes", [])
], InitModule);
exports.InitModule = InitModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBdUM7QUFDdkMsOERBQXdEO0FBQ3hELDJDQUE4QztBQUM5QyxnREFBNkM7QUFPN0MsSUFBYSxVQUFVO0lBQXZCO0lBRUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxVQUFVO0lBSnRCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLGdDQUFhLEVBQUMsdUJBQWEsQ0FBQztRQUN0QyxTQUFTLEVBQUUsQ0FBQyxlQUFNLENBQUM7S0FDdEIsQ0FBQzs7R0FDVyxVQUFVLENBRXRCO0FBRlksZ0NBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHtSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9wYWdlcy9yb3V0aW5nXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi9wYWdlcy9sYXlvdXQvbGF5b3V0XCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLFJvdXRpbmdNb2R1bGVdLFxyXG4gICAgYm9vdHN0cmFwOiBbTGF5b3V0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5pdE1vZHVsZSB7XHJcblxyXG59Il19