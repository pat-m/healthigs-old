import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { HealthComponent } from "~/app/health/health.component";
import { HealthEventComponent } from "~/app/health/event/health-event.component";
import { HealthMeetingComponent } from "~/app/health/meeting/health-meeting.component";
import { HealthPartnerComponent } from "~/app/health/partner/health-partner.component";



const routes: Routes = [
    { path: "health", component: HealthComponent, children:
        [
            { path: "meeting", component: HealthMeetingComponent},
            { path: "event", component: HealthEventComponent},
            { path: "partner", component: HealthPartnerComponent}
        ]
    }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HealthRoutingModule { }
