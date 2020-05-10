import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredients } from '../Models/ingredients.model';
import { ShoppingListService } from '../services/shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingrObj: Ingredients[];
  subscription: Subscription;
  subscriptionUpdatedIngr: Subscription;
  subscriptionDeletedIngr: Subscription;
  constructor(private shoppingList: ShoppingListService){}

  // ingrItemDelete(delIngr: Ingredients){
  //   console.log(delIngr.name+" "+delIngr.amount);
  //   let val = confirm("are you sure you want to delete?");
  //   if(val){
      // let index = this.ingredients.indexOf(delIngr);
      // if(index === -1) alert("Ingredient not found.");
      // else this.ingredients.splice(index, 1);
      //delete this.ingredients[0];
  //   }
  // }
  itemValue = '';
  ngOnInit() {
    this.ingrObj = this.shoppingList.getAllIngredients();
    this.subscription = this.shoppingList.itemAddNotified
      .subscribe((ing: Ingredients) => this.ingrObj.push(ing));

    this.subscriptionUpdatedIngr = this.shoppingList.getUpdatedIngredients.subscribe(
      (ingrs: Ingredients[]) => {
        this.ingrObj = ingrs;
      }
    );
  }
  onShoppingIngrItemSelected(ing: Ingredients){
    this.shoppingList.itemSelected.next(ing);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscriptionUpdatedIngr.unsubscribe();
  }

}
