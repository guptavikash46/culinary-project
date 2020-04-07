import { Injectable, EventEmitter } from '@angular/core';
import {Ingredients} from 'src/app/Models/ingredients.model'
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredients[] = [ new Ingredients("Knobloch ", 120.65),
                                 new Ingredients("Kurkuma ", 112.65)];
  constructor() { }

  itemAddNotified = new EventEmitter<Ingredients>();

  addIngredientsItem(ingr: Ingredients){
    this.ingredients.push(ingr);
    this.itemAddNotified.emit(ingr);
  }

  getAllIngredients(){
    return this.ingredients.slice();
  }
}
