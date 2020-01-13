import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { FoodRecipeComponent } from "~/app/food-recipe/food-recipe.component";

const routes: Routes = [
    { path: "", component: FoodRecipeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FoodRecipeRoutingModule { }
