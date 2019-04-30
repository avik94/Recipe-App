import { Ingredience } from '../ingredient/ingredience.model';

export class IngredienceService{
    ingredience:Ingredience[] = [
        new Ingredience('Tomatoes',10),
        new Ingredience('Tomatoes',10)
    ]
    //will change when routing added
    ingredienceSection = false;
    //
    getAllIngredience(){
        return this.ingredience;
    }
    putDataInIngredience(name,ammount){
        const newIngredient = new Ingredience(name,ammount);
        this.ingredience.push(newIngredient)
    }
}