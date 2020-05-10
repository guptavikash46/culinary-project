import { Ingredients } from './ingredients.model';

export class Recipe{
    id: number;
    name: string;
    desc: string;
    imageUrl: string;
    ingredients: Ingredients[];

    constructor(recipeId: number, name: string, desc: string, imagePath: string, ingr: Ingredients[]){
        this.id = recipeId;
        this.name = name;
        this.desc =desc;
        this.imageUrl = imagePath;
        this.ingredients = ingr;
    }
}