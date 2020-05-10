import { Injectable} from '@angular/core';
import {Ingredients} from 'src/app/Models/ingredients.model'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Ingredients[] = [ new Ingredients("Knobloch ", 120.65),
                                 new Ingredients("Kurkuma ", 112.65)];
  constructor() { }

  itemAddNotified = new Subject<Ingredients>();
  itemSelected = new Subject<Ingredients>();
  getUpdatedIngredients = new Subject<Ingredients[]>();
  addIngredientsItem(ingr: Ingredients){
    this.ingredients.push(ingr);
    this.itemAddNotified.next(ingr);
  }
  editIngredients(ingr: Ingredients, updatedIngr: Ingredients){
    for(let i = 0; i < this.ingredients.length; i++){
      if(ingr === this.ingredients[i]) {
        this.ingredients[i] = updatedIngr;
        this.getUpdatedIngredients.next(this.getAllIngredients()); 
        return true;
      }
    }
    return false;
  }

  deleteItem(ingr: Ingredients){
    for(let i = 0; i < this.ingredients.length; i++){
      if(ingr === this.ingredients[i]) {
        this.ingredients.splice(i, 1);
        this.getUpdatedIngredients.next(this.getAllIngredients());
        return true;
      }
    }
    return false;
  }

  getAllIngredients(){
    return this.ingredients.slice();
  }
}
