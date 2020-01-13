import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { FoodRecipeRoutingModule } from "~/app/food-recipe/food-recipe-routing.module";
import { FoodRecipeComponent } from "~/app/food-recipe/food-recipe.component";

@NgModule({
  imports: [
      NativeScriptCommonModule,
      FoodRecipeRoutingModule
  ],
  declarations: [
      FoodRecipeComponent
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class FoodRecipeModule { }
