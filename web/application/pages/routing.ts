import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {FeaturesPage} from "./features/features";
import {IndexPage} from "./index/index";
import {OrderPage} from "./order/order";
import {PricePage} from "./price/price";
import {SamplesPage} from "./samples/samples";
import {TeamPage} from "./team/team";
import {Layout} from "./layout/layout";

import {ControlsModule} from "../controls/controlsModule";


const routes: Routes = [

        {path: '', component: IndexPage},
        {path: 'features', component: FeaturesPage},
        {path: 'order', component: OrderPage},
        {path: 'price', component: PricePage},
        {path: 'samples', component: SamplesPage},
        {path: 'team', component: TeamPage}


];

@NgModule({
    declarations:[Layout,IndexPage,FeaturesPage,OrderPage,PricePage,SamplesPage,TeamPage],
    imports: [ControlsModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class RoutingModule {
}