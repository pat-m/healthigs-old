import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { SportVideoComponent } from "~/app/sport-video/sport-video.component";
import { SportVideoRoutingModule } from "~/app/sport-video/sport-video-routing.module";

@NgModule({
  imports: [
      NativeScriptCommonModule,
      SportVideoRoutingModule
  ],
  declarations: [
      SportVideoComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class SportVideoModule { }
