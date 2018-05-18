import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
     private recipes: Recipe[] = [
        new Recipe('Test Recipe1', 'Test Recipe Desc', 'https://cdn1.medicalnewstoday.com/content/images/articles/269/269143/popular-healthy-foods.jpg'),
        new Recipe('Test Recipe2', 'Test Recipe Desc', 'https://cdn1.medicalnewstoday.com/content/images/articles/269/269143/popular-healthy-foods.jpg')
      ];

    constructor() {
        
    }

    getRecipes(){
        return this.recipes.slice();
    }

}