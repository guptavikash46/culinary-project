import { Component, OnInit, Input, OnDestroy, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/Models/ingredients.model';
import { ShoppingListService } from 'src/app/services/shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // nameSelected: string;
  // amountSelected: number;
  editMode: boolean = false;
  buttonName: string = "Add";
  ingredientsToEdit: Ingredients;
  toUpdateIngredients: Ingredients;
  subscription: Subscription;
  @ViewChild('f', {static: false}) form: NgForm;
  constructor(private shoppingService: ShoppingListService) { 
  }

  ngOnInit() {
    this.subscription = this.shoppingService.itemSelected.subscribe(
      (ingr: Ingredients) => {
        this.form.setValue({
          'name': ingr.name,
          'amount': ingr.amount
        });
        this.editMode = true;
        this.buttonName = 'Edit';
        this.ingredientsToEdit = ingr;
      }
    );
  }

  onItemAdd(formVal: NgForm){
    if(!this.editMode){
      const value = formVal.value;
      const ingr = new Ingredients(value.name, value.amount);
      this.shoppingService.addIngredientsItem(ingr);  
      console.log(formVal);
    }
    else{
      const newName = formVal.value.name;
      const newAmount = formVal.value.amount;
      this.toUpdateIngredients = new Ingredients(newName, newAmount);
      this.shoppingService.editIngredients(this.ingredientsToEdit, this.toUpdateIngredients);
    }
    this.editMode = false;
    this.buttonName = 'Add';
    formVal.reset();
  }
  onItemDelete(){
    this.shoppingService.deleteItem(this.ingredientsToEdit);
    this.buttonName = 'Add';
    this.editMode = false;
    this.form.reset();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
