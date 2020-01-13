import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HealthEventRoutingModule } from "~/app/health-event/health-event-routing.module";
import { HealthEventComponent } from "~/app/health-event/health-event.component";

@NgModule({
  imports: [
      NativeScriptCommonModule,
      HealthEventRoutingModule
  ],
  declarations: [
      HealthEventComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HealthEventModule { }
