import { Ingredient } from '../shopping/ingredient.model';

export class Recipe{
    constructor( public name:string, public url:string, 
        public description:string, public ingredient:Ingredient[]){}
}