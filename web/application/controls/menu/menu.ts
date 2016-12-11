import {Component} from "@angular/core";
import {Link} from "../../entities/link";


@Component({
    moduleId: module.id,
    selector: 'menu',
    templateUrl: 'menu.html'
})
export class MenuComponent {
    links: Link[] = [
        {url: 'samples', name: 'Примеры'},
        {url: 'order', name: 'Заказать'},
        {url: 'price', name: 'Стоимость'},
        {url: 'features', name: 'Особенности'},
        {url: 'team', name: 'Команда'}
    ];
}