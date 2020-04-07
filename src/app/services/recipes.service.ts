import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../Models/recipe.model';
import { of } from 'rxjs';
import { Ingredients } from '../Models/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesService 
{
  ingredientsElements: Ingredients[];

  private recipes: Recipe[] = 
  [new Recipe('Masala dosa', "Rice made pancake stuffed with mashed potatoes.", 
        "https://img.favpng.com/5/4/8/masala-dosa-indian-cuisine-sambar-vegetarian-cuisine-png-favpng-D3X7jLL8mMiTRFvimW4qjsWyq.jpg",
        [new Ingredients("Rice batter", 500),
         new Ingredients("Potatoes", 2),
         new Ingredients("Saambar masala", 1),
         new Ingredients("Coconut", 1)]), 
         new Recipe('Rajma Chawal', "Rice with kidney beans touched with Indian curry.", 
        "https://lh3.googleusercontent.com/proxy/1CwDJZnGGGG_C4ZIS2vPiif38AH0OSuu0_itO0wS8-UD1E-N3HNWYb4py-4OnysvV9EEq47yT86UBugtn6Yc4XleNgiP3OWb70aq5uoUYwuiKEk",
        [new Ingredients("Rice", 1),
         new Ingredients("Kidney beans", 200),
         new Ingredients("Spices", 1)])];

  constructor(private shoppingService: ShoppingListService) { 
  }
  recipeItemDetail = new EventEmitter<Recipe>();
  
  getRecipes(){
    return this.recipes.slice();
  }
  recipeItem(rec: string){
    for(let i = 0; i < this.recipes.length; i++){
      if(this.recipes[i].name == rec) return this.recipes[i];
    }
  }
  addIngrToShoppingList(ingr: Ingredients[]){
    for(let ing of ingr) this.shoppingService.addIngredientsItem(ing);
  }
}
