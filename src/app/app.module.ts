import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { Recipes} from './recipes/recipes.component';
import { DropdownDirective } from './shared/dropdown.directive'
import { ShoppingListService } from './services/shopping-list.service';
import { HomeComponent } from './home/home/home.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesService } from './services/recipes.service';
import { RequestInterceptor } from './http/intercept-req.service';
import { AuthComponent } from './auth/auth.component';
import { LoadingComponent } from './shared/loading-component/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Recipes,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    DropdownDirective,
    HomeComponent,
    RecipeEditComponent,
    AuthComponent,
    LoadingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    
  ],
  providers: [ShoppingListService, RecipesService, {provide: HTTP_INTERCEPTORS, 
    useClass: RequestInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit { 

  constructor(){

  }
  ngOnInit(){

  }
}
