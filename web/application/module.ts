import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from "./pages/routing";
import {Layout} from "./pages/layout/layout";


@NgModule({
    imports: [BrowserModule,RoutingModule],
    bootstrap: [Layout]
})
export class InitModule {

}