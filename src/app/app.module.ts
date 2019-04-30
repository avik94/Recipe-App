import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RecipeComponent } from './recipe/recipe.component';
import { HeaderComponent } from './header/header.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeService } from './recipe/recipe.service';
import { IngredienceService } from './common/ingredience.service';
import { AddRecipeComponent } from './recipe/add-recipe/add-recipe.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { ManageButtonDirective } from './directive/manage-button.directive';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ListIngredientComponent } from './ingredient/list-ingredient/list-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeComponent,
    HeaderComponent,
    RecipeListComponent,
    AddRecipeComponent,
    RecipeDetailComponent,
    ManageButtonDirective,
    IngredientComponent,
    ListIngredientComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [RecipeService,IngredienceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
