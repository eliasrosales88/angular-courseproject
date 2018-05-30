import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();
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

    getRecipe(id: number){
        return this.recipes[id];
    }
    
    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe){
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }
}