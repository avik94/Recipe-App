import { Recipe } from "./recipe.model";
import { EventEmitter } from '@angular/core';

// @Injectable()
export class RecipeService{
    recipeList:Recipe[] =[        
        new Recipe("Mutton","Delicious as Kolkata!","https://media.hungryforever.com/wp-content/uploads/2017/09/02105930/lucknowi-mutton-biryani-recipe.jpg"),
        new Recipe("Dosa","Typical South Indian!","https://media3.s-nbcnews.com/j/MSNBC/Components/Video/201808/tdy_food_klg_chicken_180828_1920x1080.today-inline-vid-featured-desktop.jpg"),
        new Recipe("Pistachio Panna","End your meals, the Italian way!","http://raneenstable.com/en/wp-content/uploads/2017/12/recipe-pistachio-panna-cotta-1.jpg")
    ];
    addMoreRecipeOpen = false;
    addMoreRecipe(){
        this.addMoreRecipeOpen = true;
        console.log(this.addMoreRecipeOpen)
        return this.addMoreRecipeOpen;
    }
    closeEvent = new EventEmitter();
    recipeDetailEvent = new EventEmitter();
    allRecipeData = new EventEmitter();
    recipeDetailsOpenEvent = new EventEmitter();
    singleRecipeData = new EventEmitter();
    getRecipeData(){
        return this.recipeList;
    }
    putRecipe(name:string,description:string,url:string){ //not completed
        const newRecipe = new Recipe(name,description,url);
        this.recipeList.push(newRecipe);
    }
}