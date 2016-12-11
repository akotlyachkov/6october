import {Component} from "@angular/core";
import {Jumbo} from "../../entities/jumbo";


@Component({
    moduleId: module.id,
    selector: 'jumbo',
    templateUrl: 'jumbo.html'
})
export class JumboComponent {
    public model: Jumbo;

    constructor() {
        this.model = {
            title: "",
            message: "",
            showButton: false
        }
    }
}