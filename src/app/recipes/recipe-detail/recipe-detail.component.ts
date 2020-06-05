import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Recipe } from 'src/app/Models/recipe.model';
import { RecipesService } from 'src/app/services/recipes.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit, OnChanges, OnDestroy {
  recipeId : number;
  recipeDetails: Recipe;
  queryParams: Subscription;
  recipeItemSub: Subscription;
  editMode: boolean;
  constructor(private recipeService: RecipesService,
      private activatedRoute: ActivatedRoute, private route: Router) { }

  ngOnInit() {
    this.queryParams = this.activatedRoute.params.subscribe(
      (params: Params) => {
        this.recipeId = +params['id'];
        this.recipeService.setRecipeId(this.recipeId);
        this.recipeDetails = this.recipeService.recipeItem(this.recipeId);
      }
    );
    this.recipeId != null ? this.editMode = true : false;

    this.recipeItemSub = this.recipeService.recipeItemUpdate.subscribe(
      (rec: Recipe) => {
        this.recipeDetails = rec;
      }
    );
  }
  ngOnChanges(){
  }

  onAddToShoppingList(){
    this.recipeService.addIngrToShoppingList(this.recipeDetails.ingredients);
    alert("Ingrdients added to shopping list.");
  }
  onEditRecipe(){
    this.route.navigate(['edit'], {relativeTo: this.activatedRoute});
  }
  onDeleteRecipe(){
      this.recipeService.deleteRecipe(this.recipeId);
      this.route.navigate(['../'], {relativeTo: this.activatedRoute});
  }
  ngOnDestroy(){
    this.queryParams.unsubscribe();
    this.recipeItemSub.unsubscribe();
  }
 
}
