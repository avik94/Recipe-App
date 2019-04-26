import { Component } from '@angular/core';
import { RecipeService } from './recipe/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  recipeDetails = false;
  singleRecipeData;
  constructor(private recipeService:RecipeService){
    this.recipeService.recipeDetailEvent.subscribe((data)=>{
      this.recipeDetails = data;
    });
    this.recipeService.recipeDetailsOpenEvent.subscribe((data)=>{
      this.recipeDetails=data;
    })
    this.recipeService.singleRecipeData.subscribe((data)=>{
      this.singleRecipeData = data;
    });
  }
  title = 'recipe';
}

