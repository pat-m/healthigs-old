import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HealthMeetingRoutingModule } from "~/app/health-meeting/health-meeting-routing.module";
import { HealthMeetingComponent } from "~/app/health-meeting/health-meeting.component";

@NgModule({
  imports: [
      NativeScriptCommonModule,
      HealthMeetingRoutingModule
  ],
  declarations: [
      HealthMeetingComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HealthMeetingModule { }
