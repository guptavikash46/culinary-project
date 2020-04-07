import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Ingredients } from '../Models/ingredients.model';
import { ShoppingListService } from '../services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  //@Output() shoppingListNav = new EventEmitter<any>();
  ingrObj: Ingredients[];
  
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

  ngOnInit() {
    this.ingrObj = this.shoppingList.getAllIngredients();
    this.shoppingList.itemAddNotified
      .subscribe((ing: Ingredients) => this.ingrObj.push(ing));
  }
  // ngOnChanges(){
  //   this.ingrObj = this.shoppingList.getAllIngredients();
  // }

}
