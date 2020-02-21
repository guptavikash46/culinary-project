import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe} from '/home/vikas/Angular/culinery-project/src/app/Models/recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipes: Recipe[] = [new Recipe('recipe1', "This is simply a test-description", "https://get.pxhere.com/photo/dish-meal-food-recipe-breakfast-fast-food-squid-lunch-cuisine-delicious-rice-thailand-shrimp-asian-food-vegetarian-food-foodstuff-thailand-food-thai-food-side-dish-the-pork-fried-rice-made-southeast-asian-food-steamed-rice-stir-fried-seafood-a-fried-egg-plate-lunch-1377212.jpg")
                    , new Recipe('recipe2', "This is simply a test-description", "https://get.pxhere.com/photo/dish-meal-food-recipe-breakfast-fast-food-squid-lunch-cuisine-delicious-rice-thailand-shrimp-asian-food-vegetarian-food-foodstuff-thailand-food-thai-food-side-dish-the-pork-fried-rice-made-southeast-asian-food-steamed-rice-stir-fried-seafood-a-fried-egg-plate-lunch-1377212.jpg")];
  
  @Output() listItemClick = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }
  
  onRecipeItemSelected(recipeData: Recipe){
    this.listItemClick.emit(recipeData);

  }
  
}
