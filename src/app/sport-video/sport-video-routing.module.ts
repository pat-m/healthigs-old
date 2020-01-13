import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { SportVideoComponent } from "~/app/sport-video/sport-video.component";

const routes: Routes = [
    { path: "", component: SportVideoComponent}
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class SportVideoRoutingModule { }
