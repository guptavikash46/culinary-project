import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Ingredients } from 'src/app/Models/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('itemName', {static: false}) itemName:ElementRef;
  @ViewChild('itemAmount', {static: false}) itemAmount: ElementRef;
  @Output() ingredientAdded  =new EventEmitter<Ingredients>();
  //@Output() ingredientDeleted  =new EventEmitter<Ingredients>();
  
  constructor() { 
    //console.log(this.val);
  }

  ngOnInit() {
  }
  onItemAdd(){
    const ingr = new Ingredients(this.itemName.nativeElement.value, 
     this.itemAmount.nativeElement.value);
    this.ingredientAdded.emit(ingr);
    //console.log(this.ingr.name+" "+this.ingr.amount);

  }
  // onItemDelete(){
  //   const delItem = new Ingredients(this.itemName.nativeElement.value,
  //     this.itemAmount.nativeElement.value);
  //   this.ingredientDeleted.emit(delItem);
  // }
}
