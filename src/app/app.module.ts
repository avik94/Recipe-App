import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingComponent } from './shopping/shopping.component'
import { Routes, RouterModule } from "@angular/router";
import { RecipeService } from "./recipe/recipe.service";
import { IngredientService } from "./shared/ingredient.service";
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { DefaultMsgComponent } from './recipe/default-msg/default-msg.component';
import { IngredientListComponent } from './shopping/ingredient-list/ingredient-list.component';

const appRoutes:Routes = [
  { path: "" , redirectTo:"/recipe", pathMatch:"full"},
  { path: "recipe", component:RecipeComponent , children: [
    { path: ":id/detail" ,component: RecipeDetailComponent},
    { path: "" ,component: DefaultMsgComponent}
  ]},
  { path: "shoping-list", component:ShoppingComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    DefaultMsgComponent,
    IngredientListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecipeService, IngredientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
