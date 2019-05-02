import { Component, OnInit } from '@angular/core';
import { RecipeService } from './recipe/recipe.service';
import { IngredienceService } from './common/ingredience.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  recipeDetails = false;
  showEntireRecipe = true;
  singleRecipeData;
  constructor(private recipeService:RecipeService,
    private ingredienceService : IngredienceService){
    this.recipeService.recipeDetailEvent.subscribe((data)=>{
      this.recipeDetails = data;
    });
    this.recipeService.recipeDetailsOpenEvent.subscribe((data)=>{
      this.recipeDetails=data;
    });
    this.recipeService.singleRecipeData.subscribe((data)=>{
      this.singleRecipeData = data;
    });
    this.ingredienceService.recipeDataEvent.subscribe((data)=>{ //will change with routing
      this.showEntireRecipe = data;
    })
    this.ingredienceService.recipeDataShowEvent.subscribe((data)=>{
      this.showEntireRecipe = true;                             // to here
    }) 
  }

  ngOnInit(){
  }
  
  title = 'recipe';
}

