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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var features_1 = require("./features/features");
var index_1 = require("./index/index");
var order_1 = require("./order/order");
var price_1 = require("./price/price");
var samples_1 = require("./samples/samples");
var team_1 = require("./team/team");
var layout_1 = require("./layout/layout");
var controlsModule_1 = require("../controls/controlsModule");
var routes = [
    { path: '', component: index_1.IndexPage },
    { path: 'features', component: features_1.FeaturesPage },
    { path: 'order', component: order_1.OrderPage },
    { path: 'price', component: price_1.PricePage },
    { path: 'samples', component: samples_1.SamplesPage },
    { path: 'team', component: team_1.TeamPage }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    core_1.NgModule({
        declarations: [layout_1.Layout, index_1.IndexPage, features_1.FeaturesPage, order_1.OrderPage, price_1.PricePage, samples_1.SamplesPage, team_1.TeamPage],
        imports: [controlsModule_1.ControlsModule, router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], RoutingModule);
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGluZy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLDBDQUFxRDtBQUNyRCxzQ0FBdUM7QUFDdkMsZ0RBQWlEO0FBQ2pELHVDQUF3QztBQUN4Qyx1Q0FBd0M7QUFDeEMsdUNBQXdDO0FBQ3hDLDZDQUE4QztBQUM5QyxvQ0FBcUM7QUFDckMsMENBQXVDO0FBRXZDLDZEQUEwRDtBQUcxRCxJQUFNLE1BQU0sR0FBVztJQUVmLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsaUJBQVMsRUFBQztJQUNoQyxFQUFDLElBQUksRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLHVCQUFZLEVBQUM7SUFDM0MsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxpQkFBUyxFQUFDO0lBQ3JDLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsaUJBQVMsRUFBQztJQUNyQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLHFCQUFXLEVBQUM7SUFDekMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxlQUFRLEVBQUM7Q0FHMUMsQ0FBQztBQVFGLElBQWEsYUFBYTtJQUExQjtJQUNBLENBQUM7SUFBRCxvQkFBQztBQUFELENBQUMsQUFERCxJQUNDO0FBRFksYUFBYTtJQU56QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUMsQ0FBQyxlQUFNLEVBQUMsaUJBQVMsRUFBQyx1QkFBWSxFQUFDLGlCQUFTLEVBQUMsaUJBQVMsRUFBQyxxQkFBVyxFQUFDLGVBQVEsQ0FBQztRQUNyRixPQUFPLEVBQUUsQ0FBQywrQkFBYyxFQUFFLHFCQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZELE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7S0FDMUIsQ0FBQzs7R0FFVyxhQUFhLENBQ3pCO0FBRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7RmVhdHVyZXNQYWdlfSBmcm9tIFwiLi9mZWF0dXJlcy9mZWF0dXJlc1wiO1xyXG5pbXBvcnQge0luZGV4UGFnZX0gZnJvbSBcIi4vaW5kZXgvaW5kZXhcIjtcclxuaW1wb3J0IHtPcmRlclBhZ2V9IGZyb20gXCIuL29yZGVyL29yZGVyXCI7XHJcbmltcG9ydCB7UHJpY2VQYWdlfSBmcm9tIFwiLi9wcmljZS9wcmljZVwiO1xyXG5pbXBvcnQge1NhbXBsZXNQYWdlfSBmcm9tIFwiLi9zYW1wbGVzL3NhbXBsZXNcIjtcclxuaW1wb3J0IHtUZWFtUGFnZX0gZnJvbSBcIi4vdGVhbS90ZWFtXCI7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tIFwiLi9sYXlvdXQvbGF5b3V0XCI7XHJcblxyXG5pbXBvcnQge0NvbnRyb2xzTW9kdWxlfSBmcm9tIFwiLi4vY29udHJvbHMvY29udHJvbHNNb2R1bGVcIjtcclxuXHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuXHJcbiAgICAgICAge3BhdGg6ICcnLCBjb21wb25lbnQ6IEluZGV4UGFnZX0sXHJcbiAgICAgICAge3BhdGg6ICdmZWF0dXJlcycsIGNvbXBvbmVudDogRmVhdHVyZXNQYWdlfSxcclxuICAgICAgICB7cGF0aDogJ29yZGVyJywgY29tcG9uZW50OiBPcmRlclBhZ2V9LFxyXG4gICAgICAgIHtwYXRoOiAncHJpY2UnLCBjb21wb25lbnQ6IFByaWNlUGFnZX0sXHJcbiAgICAgICAge3BhdGg6ICdzYW1wbGVzJywgY29tcG9uZW50OiBTYW1wbGVzUGFnZX0sXHJcbiAgICAgICAge3BhdGg6ICd0ZWFtJywgY29tcG9uZW50OiBUZWFtUGFnZX1cclxuXHJcblxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczpbTGF5b3V0LEluZGV4UGFnZSxGZWF0dXJlc1BhZ2UsT3JkZXJQYWdlLFByaWNlUGFnZSxTYW1wbGVzUGFnZSxUZWFtUGFnZV0sXHJcbiAgICBpbXBvcnRzOiBbQ29udHJvbHNNb2R1bGUsIFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0aW5nTW9kdWxlIHtcclxufSJdfQ==