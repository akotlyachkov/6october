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
var NavbarComponent = (function () {
    function NavbarComponent() {
        this.links = [
            { url: 'samples', name: 'Примеры' },
            { url: 'order', name: 'Заказать' },
            { url: 'price', name: 'Стоимость' },
            { url: 'features', name: 'Особенности' },
            { url: 'team', name: 'Команда' }
        ];
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'navbar',
        templateUrl: 'navbar.html'
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF2YmFyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBd0M7QUFTeEMsSUFBYSxlQUFlO0lBTDVCO1FBTUksVUFBSyxHQUFXO1lBQ1osRUFBQyxHQUFHLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7WUFDakMsRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUM7WUFDaEMsRUFBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUM7WUFDakMsRUFBQyxHQUFHLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUM7WUFDdEMsRUFBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUM7U0FDakMsQ0FBQztJQUNOLENBQUM7SUFBRCxzQkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksZUFBZTtJQUwzQixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ25CLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFdBQVcsRUFBRSxhQUFhO0tBQzdCLENBQUM7O0dBQ1csZUFBZSxDQVEzQjtBQVJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7TGlua30gZnJvbSBcIi4uLy4uL2VudGl0aWVzL2xpbmtcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ25hdmJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ25hdmJhci5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTmF2YmFyQ29tcG9uZW50IHtcclxuICAgIGxpbmtzOiBMaW5rW10gPSBbXHJcbiAgICAgICAge3VybDogJ3NhbXBsZXMnLCBuYW1lOiAn0J/RgNC40LzQtdGA0YsnfSxcclxuICAgICAgICB7dXJsOiAnb3JkZXInLCBuYW1lOiAn0JfQsNC60LDQt9Cw0YLRjCd9LFxyXG4gICAgICAgIHt1cmw6ICdwcmljZScsIG5hbWU6ICfQodGC0L7QuNC80L7RgdGC0YwnfSxcclxuICAgICAgICB7dXJsOiAnZmVhdHVyZXMnLCBuYW1lOiAn0J7RgdC+0LHQtdC90L3QvtGB0YLQuCd9LFxyXG4gICAgICAgIHt1cmw6ICd0ZWFtJywgbmFtZTogJ9Ca0L7QvNCw0L3QtNCwJ31cclxuICAgIF07XHJcbn0iXX0=