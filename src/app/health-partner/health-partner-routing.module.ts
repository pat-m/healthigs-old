import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HealthPartnerComponent } from "~/app/health-partner/health-partner.component";

const routes: Routes = [
    { path: "", component: HealthPartnerComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HealthPartnerRoutingModule { }
