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
var MenuComponent = (function () {
    function MenuComponent() {
        this.links = [
            { url: 'samples', name: 'Примеры' },
            { url: 'order', name: 'Заказать' },
            { url: 'price', name: 'Стоимость' },
            { url: 'features', name: 'Особенности' },
            { url: 'team', name: 'Команда' }
        ];
    }
    return MenuComponent;
}());
MenuComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'menu',
        templateUrl: 'menu.html'
    }),
    __metadata("design:paramtypes", [])
], MenuComponent);
exports.MenuComponent = MenuComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1lbnUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF3QztBQVN4QyxJQUFhLGFBQWE7SUFMMUI7UUFNSSxVQUFLLEdBQVc7WUFDWixFQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztZQUNqQyxFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQztZQUNoQyxFQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBQztZQUNqQyxFQUFDLEdBQUcsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBQztZQUN0QyxFQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBQztTQUNqQyxDQUFDO0lBQ04sQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQVJELElBUUM7QUFSWSxhQUFhO0lBTHpCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLE1BQU07UUFDaEIsV0FBVyxFQUFFLFdBQVc7S0FDM0IsQ0FBQzs7R0FDVyxhQUFhLENBUXpCO0FBUlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtMaW5rfSBmcm9tIFwiLi4vLi4vZW50aXRpZXMvbGlua1wiO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbWVudScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJ21lbnUuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1lbnVDb21wb25lbnQge1xyXG4gICAgbGlua3M6IExpbmtbXSA9IFtcclxuICAgICAgICB7dXJsOiAnc2FtcGxlcycsIG5hbWU6ICfQn9GA0LjQvNC10YDRiyd9LFxyXG4gICAgICAgIHt1cmw6ICdvcmRlcicsIG5hbWU6ICfQl9Cw0LrQsNC30LDRgtGMJ30sXHJcbiAgICAgICAge3VybDogJ3ByaWNlJywgbmFtZTogJ9Ch0YLQvtC40LzQvtGB0YLRjCd9LFxyXG4gICAgICAgIHt1cmw6ICdmZWF0dXJlcycsIG5hbWU6ICfQntGB0L7QsdC10L3QvdC+0YHRgtC4J30sXHJcbiAgICAgICAge3VybDogJ3RlYW0nLCBuYW1lOiAn0JrQvtC80LDQvdC00LAnfVxyXG4gICAgXTtcclxufSJdfQ==