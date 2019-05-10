import { Ingredient } from '../shopping/ingredient.model';

export class IngredientService{
    ingredients:Ingredient[] = [
        new Ingredient("Onion", 2),
        new Ingredient("Garlic", 3),
    ]

    getIngredient(){
        return this.ingredients.slice();
    }

}