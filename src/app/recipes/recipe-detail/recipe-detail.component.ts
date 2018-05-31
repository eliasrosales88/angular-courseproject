import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  
  recipe: Recipe;
  // recipeArray: Recipe[];
  id: number;

  constructor( private recipeService: RecipeService, private route: ActivatedRoute, public router:Router) { }
  
  
  
ngOnInit() {
  // this.recipeArray = this.recipeService.getRecipes();
  // this.id = +this.route.snapshot.params['id'];
  // this.recipe = this.recipeArray[this.id];

  this.route.params.subscribe( (params: Params) =>{
     this.id = +params['id'];
     this.recipe = this.recipeService.getRecipe(this.id);
    });

  

}

  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  onDeleteRecipe(){
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(["/recipes"]);

  }

  
  
}
