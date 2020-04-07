import { Component, OnInit, Input, Output } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipes: Recipe;

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
  }
  

}
