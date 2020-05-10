import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe} from 'src/app/Models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  
  @Output() listItemClick = new EventEmitter<string>();

  constructor(private recipeService: RecipesService, 
    private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  
  onRecipeItemSelected(recipeData: Recipe){
    //console.log("the data: "+ this.recipeService.recipeItem(recipeData).name);
    this.listItemClick.emit(recipeData.name);
  }
  onNewRecipe(){
    this.recipeService.setRecipeId(null);
    this.route.navigate(['new'], {relativeTo: this.activateRoute});
  }
}
