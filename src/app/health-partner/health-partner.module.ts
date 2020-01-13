import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { HealthPartnerComponent } from "~/app/health-partner/health-partner.component";
import { HealthPartnerRoutingModule } from "~/app/health-partner/health-partner-routing.module";

@NgModule({
  imports: [
      NativeScriptCommonModule,
      HealthPartnerRoutingModule
  ],
  declarations: [
      HealthPartnerComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class HealthPartnerModule { }
