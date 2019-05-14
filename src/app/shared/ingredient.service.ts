import { Ingredient } from '../shopping/ingredient.model'; 

export class IngredientService{
    ingredients:Ingredient[] = [
        new Ingredient("Onion", 2),
        new Ingredient("Garlic", 3),
    ]

    getIngredient(){
        return this.ingredients;
    }
    addIngredient(ingredient, ammount,id){
        const newIngredient = new Ingredient(ingredient,ammount)
        this.ingredients.push(newIngredient);
        console.log(id)
    }

    clearAllIngredients(){
        this.ingredients = [];
    }

}