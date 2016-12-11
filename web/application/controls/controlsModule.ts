import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";
import {MenuComponent} from "./menu/menu";
import {NavbarComponent} from "./navbar/navbar";
import {JumboComponent} from "./jumbo/jumbo";
import {RouterModule} from "@angular/router";


@NgModule({
    declarations: [JumboComponent, NavbarComponent, MenuComponent],
    imports: [CommonModule,RouterModule],
    exports: [JumboComponent, NavbarComponent, MenuComponent]
})

export class ControlsModule {
}