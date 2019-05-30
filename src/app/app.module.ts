import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';

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
import { NewRecipeComponent } from './recipe/new-recipe/new-recipe.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { WholeAppComponent } from './whole-app/whole-app.component';
import { ServerService } from './server.service';

const appRoutes:Routes = [
  { path: "", redirectTo:"/recipe", pathMatch:"full"},
  { path: "", component: WholeAppComponent, children:[    
    { path: "recipe", component:RecipeComponent , children: [
      { path: ":id/detail" ,component: RecipeDetailComponent},
      { path: "new" ,component: NewRecipeComponent},
      { path: ":id/edit" ,component: NewRecipeComponent},
      { path: "" ,component: DefaultMsgComponent},
    ]},
    { path: "shoping-list", component:ShoppingComponent},

  ]},
  { path: "signin", component: SigninComponent},
  { path: "login", component: LoginComponent}
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
    IngredientListComponent,
    NewRecipeComponent,
    SigninComponent,
    LoginComponent,
    WholeAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RecipeService, IngredientService, ServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
