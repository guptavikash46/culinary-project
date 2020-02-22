import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../Models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  @Output() shoppingListNav = new EventEmitter<any>();
  ingredients: Ingredients[] = [ new Ingredients("Knobloch ", 120.65),
                                 new Ingredients("Kurkuma ", 112.65)];
                                 
  ingrItemRecieved(data: Ingredients){
    console.log(data);
    this.ingredients.push(data);
  }
  ingrItemDelete(delIngr: Ingredients){
    console.log(delIngr.name+" "+delIngr.amount);
    let val = confirm("are you sure you want to delete?");
    if(val){
      // let index = this.ingredients.indexOf(delIngr);
      // if(index === -1) alert("Ingredient not found.");
      // else this.ingredients.splice(index, 1);
      //delete this.ingredients[0];
    }
  }
  constructor() { 
  }

  ngOnInit() {
  }


}
