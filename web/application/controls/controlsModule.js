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
var common_1 = require("@angular/common");
var core_1 = require("@angular/core");
var menu_1 = require("./menu/menu");
var navbar_1 = require("./navbar/navbar");
var jumbo_1 = require("./jumbo/jumbo");
var router_1 = require("@angular/router");
var ControlsModule = (function () {
    function ControlsModule() {
    }
    return ControlsModule;
}());
ControlsModule = __decorate([
    core_1.NgModule({
        declarations: [jumbo_1.JumboComponent, navbar_1.NavbarComponent, menu_1.MenuComponent],
        imports: [common_1.CommonModule, router_1.RouterModule],
        exports: [jumbo_1.JumboComponent, navbar_1.NavbarComponent, menu_1.MenuComponent]
    }),
    __metadata("design:paramtypes", [])
], ControlsModule);
exports.ControlsModule = ControlsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbHNNb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sc01vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMENBQTZDO0FBQzdDLHNDQUF1QztBQUN2QyxvQ0FBMEM7QUFDMUMsMENBQWdEO0FBQ2hELHVDQUE2QztBQUM3QywwQ0FBNkM7QUFTN0MsSUFBYSxjQUFjO0lBQTNCO0lBQ0EsQ0FBQztJQUFELHFCQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxjQUFjO0lBTjFCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFDLHNCQUFjLEVBQUUsd0JBQWUsRUFBRSxvQkFBYSxDQUFDO1FBQzlELE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUMscUJBQVksQ0FBQztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxzQkFBYyxFQUFFLHdCQUFlLEVBQUUsb0JBQWEsQ0FBQztLQUM1RCxDQUFDOztHQUVXLGNBQWMsQ0FDMUI7QUFEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uXCI7XHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TWVudUNvbXBvbmVudH0gZnJvbSBcIi4vbWVudS9tZW51XCI7XHJcbmltcG9ydCB7TmF2YmFyQ29tcG9uZW50fSBmcm9tIFwiLi9uYXZiYXIvbmF2YmFyXCI7XHJcbmltcG9ydCB7SnVtYm9Db21wb25lbnR9IGZyb20gXCIuL2p1bWJvL2p1bWJvXCI7XHJcbmltcG9ydCB7Um91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcblxyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0p1bWJvQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIE1lbnVDb21wb25lbnRdLFxyXG4gICAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSxSb3V0ZXJNb2R1bGVdLFxyXG4gICAgZXhwb3J0czogW0p1bWJvQ29tcG9uZW50LCBOYXZiYXJDb21wb25lbnQsIE1lbnVDb21wb25lbnRdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udHJvbHNNb2R1bGUge1xyXG59Il19