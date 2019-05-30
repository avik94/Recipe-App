import { Ingredient } from '../shopping/ingredient.model'; 
import { EventEmitter } from '@angular/core';

export class IngredientService{
    ingredients:Ingredient[] = [];
    getRecipedetailsEvent = new EventEmitter<Ingredient[]>()
    loginLogoutButton = new EventEmitter<boolean>()
    getIngredient(){
        return this.ingredients;
    }
    addEntireIngredient(ingredients){
        this.ingredients.push(...ingredients);
    }
    addIngredient(ingredient, ammount,id){
        const newIngredient = new Ingredient(ingredient,ammount)
        this.ingredients.push(newIngredient);
    }

    clearAllIngredients(){
        this.ingredients = [];
    }

}