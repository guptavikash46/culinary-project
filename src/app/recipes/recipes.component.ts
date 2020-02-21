import { OnInit, Component, Output } from '@angular/core';
import { Recipe } from '../Models/recipe.model';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css']    
})
export class Recipes implements OnInit{
    constructor(){
    }

    ngOnInit(){

    }
}