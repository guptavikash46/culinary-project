import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Recipe } from 'src/app/Models/recipe.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  imgUrl = '';
  initId = 0;
  constructor(private recipeService: RecipesService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.recipeService.getRecipeId();
    if(this.recipeService.getRecipeId() != null) {
      this.editMode = true;
    }
    this.initForm();
  }

  private initForm(){
    let recipeName = '';
    let recipeDesc = '';
    let recipeImgUrl = '';
    let recipeIngredients = new FormArray([]);
    if(this.editMode){
      const recipeObject = this.recipeService.recipeItem(this.id);
      recipeName = recipeObject.name;
      recipeDesc = recipeObject.desc;
      recipeImgUrl = recipeObject.imageUrl;
      this.imgUrl = recipeImgUrl;

      if(recipeObject['ingredients'] ){
        for(let ingr of recipeObject.ingredients){
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingr.name, Validators.required),
              'amount': new FormControl(ingr.amount, [Validators.required, Validators.pattern(/(^\d*\.?\d*[1-9]+\d*$)|(^[1-9]+\d*\.\d*$)/)]),
            })
          );
        }
      }
    }
    
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName, Validators.required),
      'desc': new FormControl(recipeDesc, Validators.required),
      'imageUrl': new FormControl(recipeImgUrl, Validators.required),
      'ingredients': recipeIngredients,
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
    
    if(this.editMode){
      const recipe = new Recipe(this.id, this.recipeForm.value['name'], this.recipeForm.value['desc'],
                    this.recipeForm.value['imageUrl'], this.recipeForm.value['ingredients']);
      this.recipeService.updateRecipe(this.id, recipe);
      this.router.navigate(['../'], {relativeTo: this.activatedRoute});
    }
    else{
      this.initId = this.recipeService.getRecipeListLastIndex() + 1;
      const recipe = new Recipe(this.initId, this.recipeForm.value['name'], this.recipeForm.value['desc'],
                         this.recipeForm.value['imageUrl'], this.recipeForm.value['ingredients'])
      this.recipeService.addRecipe(recipe);
      this.recipeForm.reset();
    }
  }

  onAddIngr(){
    (<FormArray> this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null, Validators.required),
        'amount': new FormControl(null, [Validators.required, Validators.pattern(/(^\d*\.?\d*[1-9]+\d*$)|(^[1-9]+\d*\.\d*$)/)]),
      })
    );
  }
  onFormCancel(){
    this.router.navigate(['../'], {relativeTo: this.activatedRoute});
  }
  onDeleteIndividualIngr(index: number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }
  getIngrControls(){
    return (<FormArray> this.recipeForm.get('ingredients')).controls;
  }
}
