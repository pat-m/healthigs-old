import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { HealthMeetingComponent } from "~/app/health-meeting/health-meeting.component";

const routes: Routes = [
    { path: "", component: HealthMeetingComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HealthMeetingRoutingModule { }
