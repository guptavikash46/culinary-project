import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/Models/ingredients.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemName', {static: false}) itemName:ElementRef;
  @ViewChild('itemAmount', {static: false}) itemAmount: ElementRef;
  //@Output() ingredientDeleted  =new EventEmitter<Ingredients>();
  
  constructor(private shoppingService: ShoppingListService) { 
  }

  ngOnInit() {
  }
  onItemAdd(){
    const ingr = new Ingredients(this.itemName.nativeElement.value, 
      this.itemAmount.nativeElement.value);
    this.shoppingService.addIngredientsItem(ingr);
    //console.log(this.shoppingService.getAllIngredients());


  }
  // onItemDelete(){
  //   const delItem = new Ingredients(this.itemName.nativeElement.value,
  //     this.itemAmount.nativeElement.value);
  //   this.ingredientDeleted.emit(delItem);
  // }
}
