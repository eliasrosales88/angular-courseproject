import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();
     private recipes: Recipe[] = [
        new Recipe(
            'Pabellon Criollo', 
            'Plato tipico venezolano (no poner azucar a las caraotas)',
            'https://cdn1.medicalnewstoday.com/content/images/articles/269/269143/popular-healthy-foods.jpg', 
            [
                new Ingredient('Arroz', 1), 
                new Ingredient('Caraotas',1)
            ]
        ),
        new Recipe(
            'Asado Negro', 
            'Carne con un gusto dulcesalado',
            'https://cdn1.medicalnewstoday.com/content/images/articles/269/269143/popular-healthy-foods.jpg',
            [
                new Ingredient('Carne', 1), 
                new Ingredient('Arroz',1)
            ]
        )];

    constructor( private slService: ShoppingListService) {
        
    }

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }
}