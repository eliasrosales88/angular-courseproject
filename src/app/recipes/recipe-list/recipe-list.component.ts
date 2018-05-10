import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe1', 'Test Recipe2', 'https://cdn1.medicalnewstoday.com/content/images/articles/269/269143/popular-healthy-foods.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
