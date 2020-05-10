import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/services/recipes.service';
import { FormGroup, FormControl } from '@angular/forms';

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
  constructor(private recipeService: RecipesService) { }

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
    if(this.editMode){
      const recipeObject = this.recipeService.recipeItem(this.id);
      recipeName = recipeObject.name;
      recipeDesc = recipeObject.desc;
      recipeImgUrl = recipeObject.imageUrl;
      this.imgUrl = recipeImgUrl;
    }
    
    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'description': new FormControl(recipeDesc),
      'imageUrl': new FormControl(recipeImgUrl),
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }
}
