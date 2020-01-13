import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FoodVedgeRoutingModule } from "~/app/food-vedge/food-vedge-routing.module";
import { FoodVedgeComponent } from "~/app/food-vedge/food-vedge.component";

@NgModule({
  imports: [
      NativeScriptCommonModule,
      FoodVedgeRoutingModule
  ],
  declarations: [
      FoodVedgeComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FoodVedgeModule { }
