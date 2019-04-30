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
  ingredienceSection;   // will change with routing
  singleRecipeData;
  constructor(private recipeService:RecipeService,
    private ingredienceService:IngredienceService){
    this.recipeService.recipeDetailEvent.subscribe((data)=>{
      this.recipeDetails = data;
    });
    this.recipeService.recipeDetailsOpenEvent.subscribe((data)=>{
      this.recipeDetails=data;
    });
    this.recipeService.singleRecipeData.subscribe((data)=>{
      this.singleRecipeData = data;
    });
  }

  ngOnInit(){
    this.ingredienceSection = this.ingredienceService.ingredienceSection
  }
  openIngredience(){                                     //temporary
    this.ingredienceSection = !this.ingredienceSection;
  }
  title = 'recipe';
}

