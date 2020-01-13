import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HealthEventComponent } from "~/app/health-event/health-event.component";

const routes: Routes = [
    { path: "", component: HealthEventComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HealthEventRoutingModule { }
