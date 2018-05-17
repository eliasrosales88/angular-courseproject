import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe1', 'Test Recipe Desc', 'https://cdn1.medicalnewstoday.com/content/images/articles/269/269143/popular-healthy-foods.jpg'),
    new Recipe('Test Recipe2', 'Test Recipe Desc', 'https://cdn1.medicalnewstoday.com/content/images/articles/269/269143/popular-healthy-foods.jpg')
  ];
  
  @Output() onRecipeSelected = new EventEmitter<Recipe>();
  
  recipeClicked(recipe: Recipe){
    this.onRecipeSelected.emit(recipe);
  }
  
  constructor() { }

  ngOnInit() {
  }


}
