import { Ingredients } from './ingredients.model';

export class Recipe{
    name: string;
    desc: string;
    imageUrl: string;
    ingredients: Ingredients[];

    constructor(name: string, desc: string, imagePath: string, ingr: Ingredients[]){
        this.name = name;
        this.desc =desc;
        this.imageUrl = imagePath;
        this.ingredients = ingr;
    }
}