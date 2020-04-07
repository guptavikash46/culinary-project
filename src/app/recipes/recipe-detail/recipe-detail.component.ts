import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges {
  @Input() recipeVal : string;
  recipeDetails: Recipe;
  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }
  ngOnChanges(){
    this.recipeDetails = this.recipeService.recipeItem(this.recipeVal);
  }
  onAddToShoppingList(){
    this.recipeService.addIngrToShoppingList(this.recipeDetails.ingredients);
    alert("Ingrdients added to shopping list.");
  }
}
