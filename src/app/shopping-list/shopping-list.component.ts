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
  constructor() { }

  ngOnInit() {
  }


}
