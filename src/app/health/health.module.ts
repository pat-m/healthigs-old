import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { HealthComponent } from "./health.component";
import { HealthEventComponent } from "~/app/health/event/health-event.component";
import { HealthPartnerComponent } from "~/app/health/partner/health-partner.component";
import { HealthMeetingComponent } from "~/app/health/meeting/health-meeting.component";
import { HealthRoutingModule } from "~/app/health/health-routing.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        HealthRoutingModule
    ],
    declarations: [
        HealthComponent,
        HealthMeetingComponent,
        HealthEventComponent,
        HealthPartnerComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HealthModule { }
