import {Component} from "@angular/core";
import {Link} from "../../entities/link";


@Component({
    moduleId: module.id,
    selector: 'navbar',
    templateUrl: 'navbar.html'
})
export class NavbarComponent {
    links: Link[] = [
        {url: 'samples', name: 'Примеры'},
        {url: 'order', name: 'Заказать'},
        {url: 'price', name: 'Стоимость'},
        {url: 'features', name: 'Особенности'},
        {url: 'team', name: 'Команда'}
    ];
}