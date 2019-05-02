import { Ingredience } from '../ingredient/ingredience.model';
import { EventEmitter } from '@angular/core';

export class IngredienceService{
    ingredience:Ingredience[] = [
        new Ingredience('Tomatoes',10),
        new Ingredience('Tomatoes',10)
    ]
    //will change when routing added
    recipeDataEvent = new EventEmitter();
    recipeDataShowEvent = new EventEmitter();
    //
    getAllIngredience(){
        return this.ingredience;
    }
    putDataInIngredience(name,ammount){
        const newIngredient = new Ingredience(name,ammount);
        this.ingredience.push(newIngredient)
    }
}