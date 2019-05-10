import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Ingredient } from 'src/app/shopping/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe:Recipe;
  ingredients:Ingredient[];
  constructor( private route: ActivatedRoute, 
    private recipeService: RecipeService ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params:Params)=>{
        this.recipe = this.recipeService.getRecipeById(params.id);
        this.ingredients = this.recipe.ingredient
      }
    )      
  }

}
