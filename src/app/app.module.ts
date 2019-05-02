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
import { Routes,RouterModule } from "@angular/router";

const appRoute:Routes = [
  { path: 'ingredient', component: IngredientComponent }
]

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
    BrowserModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [RecipeService,IngredienceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
