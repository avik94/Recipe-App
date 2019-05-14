import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping/ingredient.model';
import { Injectable } from '@angular/core';
import { IngredientService } from '../shared/ingredient.service';

@Injectable()
export class RecipeService{
    recipes:Recipe[] = [
        new Recipe("Chicken", "https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg",
         "Very Tasty",[
             new Ingredient("Onion", 2),
             new Ingredient("Chicken", 5)
         ]),
         new Recipe("Mutton", "https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg",
         "What to say!!!!",[
             new Ingredient("Mutton", 2),
             new Ingredient("Garlic", 5)
         ])
    ]

    constructor( private ingredientService: IngredientService ){ }

    getRecipes(){
        return this.recipes;
    }

    getRecipeById(id){
        return this.recipes[id];
    }

    addRecipe(name:string,url:string,des:string){
        const newRecipe = new Recipe(name,url,des,[]);
        this.recipes.push(newRecipe);
    }

    getSeparateIngredience(id){
        const ingredience = this.ingredientService.getIngredient().slice();
        this.getRecipeById(id).ingredient = ingredience;
    }
}