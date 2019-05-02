import { Ingredience } from '../ingredient/ingredience.model';

export class Recipe{
    name:string;
    description:string;
    url:string;
    ingrediences:Ingredience[]
    constructor(name:string,description:string,url:string,ingrediences:Ingredience[]){
        this.name = name;
        this.description = description;
        this.url = url;
        this.ingrediences =ingrediences;
    }
}