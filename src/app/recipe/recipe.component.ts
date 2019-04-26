import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeList:Recipe[];
  addMoreRecipeOpen = true; 

  constructor(private recipeService:RecipeService) {
    this.recipeService.closeEvent.subscribe(
      (data)=>{
        this.addMoreRecipeOpen = data;
      }
    )     
  }

  ngOnInit() {
    this.recipeList = this.recipeService.getRecipeData();    
    
  }
  addMore(){
    this.addMoreRecipeOpen = this.recipeService.addMoreRecipe();
    this.recipeService.recipeDetailsOpenEvent.emit(false);
  }
  recipeDetails(data){
    console.log(data);
    this.recipeService.singleRecipeData.emit(data);
    this.recipeService.recipeDetailEvent.emit(true);
    this.recipeService.closeEvent.emit(false)    

  }

}
