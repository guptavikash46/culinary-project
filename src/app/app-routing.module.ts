import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { Recipes } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', component: Recipes, children: [ 
    {path: 'new', component: RecipeEditComponent},
    {path: ':id', component: RecipeDetailComponent, children: [
      {path: 'edit', component: RecipeEditComponent}, 
    ]},
  ]},
  {path: 'shopping-list', component: ShoppingListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
