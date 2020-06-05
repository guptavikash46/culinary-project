import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { RecipesService } from '../services/recipes.service';
import { HttpRequestsService } from '../http/http-requests.service';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  headerColor = '#0080ff';
  userSubscription: Subscription;
  isAuthenticated = false;
  @Output() featureSelect = new EventEmitter<string>();
 
  getHeaderColor(){
    return this.headerColor;
  }

  
  constructor(private recipeService: RecipesService, 
    private httpService: HttpRequestsService, private authService: AuthService) { }

  ngOnInit() {
    this.userSubscription = this.authService.userLoginData.subscribe(
      userInfo => {
        //if(userInfo == null) {}
        if(userInfo != null) this.isAuthenticated = true;
      }
    );
  }
  onLogout(){
    this.isAuthenticated = false;
  }
  onSaveData(){
    this.httpService.postData(this.recipeService.getRecipes());
  }
  onFetchData(){
    this.httpService.getData().subscribe(data => {
      console.log(data);
    });
  }
  ngOnDestroy(){
    this.userSubscription.unsubscribe();
  }
}
