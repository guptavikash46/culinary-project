import { Injectable } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Recipe } from '../Models/recipe.model';
import{ tap, take, exhaustMap } from 'rxjs/operators'; 
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpRequestsService {

  constructor(private recipeService: RecipesService, private http: HttpClient,
    private authService: AuthService) { }

  postData(recipes: Recipe[]){
    this.http.post<Recipe[]>('https://culinery-app.firebaseio.com/recipes.json',recipes)
      .subscribe(
        data => {
          console.log(data);
        }
      ); 
  }

  getData(){
    return this.authService.userLoginData.pipe(take(1), exhaustMap( user => {
      console.log("Data from exhaust map: "+user.email +" "+user.token);
      return this.http.get<any>('https://culinery-app.firebaseio.com/recipes.json', {
        params: new HttpParams().set('auth', user.token)
      })
    }));  
  }
}
