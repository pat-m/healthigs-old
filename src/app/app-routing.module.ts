import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "health-meeting", loadChildren: () => import("~/app/health-meeting/health-meeting.module").then((m) => m.HealthMeetingModule) },
    { path: "health-event", loadChildren: () => import("~/app/health-event/health-event.module").then((m) => m.HealthEventModule) },
    { path: "health-partner", loadChildren: () => import("~/app/health-partner/health-partner.module").then((m) => m.HealthPartnerModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
