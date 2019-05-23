import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping/ingredient.model';
import { Injectable, EventEmitter } from '@angular/core';
import { IngredientService } from '../shared/ingredient.service';

@Injectable()
export class RecipeService{
    private recipes:Recipe[] = [
        new Recipe("Chicken", "https://www.seriouseats.com/recipes/images/2016/12/20161201-crispy-roast-potatoes-29-1500x1125.jpg",
         "Very Tasty",[
             new Ingredient("Onion", 2),
             new Ingredient("Chicken", 5)
         ]),
         new Recipe("Mutton", "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/pal.rini1-gmail.com/Mangsher_Jhol_Bengali_Style_Mutton_Curry.jpg",
         "What to say!!!!",[
             new Ingredient("Mutton", 2),
             new Ingredient("Garlic", 5)
         ])
    ]
    recipesChanges = new EventEmitter();
    constructor( private ingredientService: IngredientService ){ }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipeById(id){
        return this.recipes[id];
    }

    addRecipe(newRecipe:Recipe){
        this.recipes.push(newRecipe);
        this.recipesChanges.emit(this.recipes.slice());
    }
    updateRecipe(index: number, newRecipe:Recipe){
        this.recipes[index] = newRecipe
        this.recipesChanges.emit(this.recipes.slice());
    }
    deleteRecipe(index:number){
        this.recipes.splice(index,1);
        this.recipesChanges.emit(this.recipes.slice());
    }

    getSeparateIngredience(id){
        const ingredience = this.ingredientService.getIngredient().slice();
        this.getRecipeById(id).ingredient = ingredience;
    }    
}