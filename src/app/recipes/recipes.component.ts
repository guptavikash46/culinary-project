import { OnInit, Component } from '@angular/core';
import { RecipesService } from '../services/recipes.service';

@Component({
    selector: 'app-recipes',
    templateUrl: './recipes.component.html',
    styleUrls: ['./recipes.component.css'],
    providers: [RecipesService]    
})
export class Recipes implements OnInit{

    constructor(private recipeService: RecipesService){
    }

    ngOnInit(){
    }

    onItemSelected(val: string){
        //this.selectedRecipe = val;
        console.log("on click :"+ val);
    }
}