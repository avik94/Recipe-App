import { Recipe } from './recipe.model';
import { Ingredient } from '../shopping/ingredient.model';

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

    getRecipes(){
        return this.recipes;
    }
    getRecipeById(id){
        return this.recipes[id];
    }
}