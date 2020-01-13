import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { FoodVedgeComponent } from "~/app/food-vedge/food-vedge.component";

const routes: Routes = [
    { path: "", component: FoodVedgeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FoodVedgeRoutingModule { }
