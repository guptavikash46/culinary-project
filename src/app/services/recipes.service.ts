import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from '../Models/recipe.model';
import { Ingredients } from '../Models/ingredients.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipesService 
{
  ingredientsElements: Ingredients[];
  recipeId: number;
  recipeUpdateNotify = new Subject<Recipe[]>();
  recipeItemUpdate = new Subject<Recipe>();
  private recipes: Recipe[] = 
  [new Recipe(1, 'Masala dosa', "Rice made pancake stuffed with mashed potatoes.", 
        "https://img.favpng.com/5/4/8/masala-dosa-indian-cuisine-sambar-vegetarian-cuisine-png-favpng-D3X7jLL8mMiTRFvimW4qjsWyq.jpg",
        [new Ingredients("Rice batter", 500),
         new Ingredients("Potatoes", 2),
         new Ingredients("Saambar masala", 1),
         new Ingredients("Coconut", 1)]), 

         new Recipe(2, 'Bratwurst', "Typical german dish made of pork.", 
        "https://foremangrillrecipes.com/wp-content/uploads/2019/03/featured-grilled-bratwurst.jpg",
        [new Ingredients("Pork meat", 1),
         new Ingredients("Mayo", 2),
         new Ingredients("Potatoes", 3)])];

  constructor(private shoppingService: ShoppingListService) { 
  }
  recipeItemDetail = new EventEmitter<Recipe>();
  
  setRecipes(recipes: Recipe[]){
    this.recipes = recipes;
    this.recipeUpdateNotify.next(recipes);
  }
  getRecipes(){
    return this.recipes.slice();
  }
  recipeItem(rec: number){
    for(let i = 0; i < this.recipes.length; i++){
      if(this.recipes[i].id === rec) return this.recipes[i];
    }
    return null;
  }
  setRecipeId(id: number){
    this.recipeId = id;
  }
  getRecipeId(){
    return this.recipeId;
  }
  addIngrToShoppingList(ingr: Ingredients[]){
    for(let ing of ingr) this.shoppingService.addIngredientsItem(ing);
  }
  getRecipeListLastIndex(){
    return this.recipes.length;
  }
  addRecipe(rec: Recipe){
    this.recipes.push(rec);
    this.recipeUpdateNotify.next(this.getRecipes());
  }
  updateRecipe(recID: number, rec: Recipe){
    for(let i = 0; i < this.recipes.length; i++){
      if(this.recipes[i].id === recID){
        this.recipes[i] = rec;
        this.recipeUpdateNotify.next(this.getRecipes());
        this.recipeItemUpdate.next(rec);
        return true;
      }
    }
    return false;
  }
  deleteRecipe(recID: number){
    for(let i = 0; i < this.recipes.length; i++){
      if(this.recipes[i].id === recID){
        this.recipes.splice(i, 1);
        this.recipeUpdateNotify.next(this.getRecipes());
        return true;
      }
    }
    return false;
  }
}
