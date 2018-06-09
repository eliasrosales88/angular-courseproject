import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { patch } from 'webdriver-js-extender';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeDefaultComponent } from './recipes/recipe-default/recipe-default.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';



const appRoutes: Routes = [
    { path:'', redirectTo: '/recipes', pathMatch:'full' },
    { path:'shopping-list', component: ShoppingListComponent },
    { path:'recipes', component: RecipesComponent, children:[ 
        {path:'', component: RecipeDefaultComponent}, 
        {path:'new', component: RecipeEditComponent}, 
        {path:':id', component: RecipeDetailComponent}, 
        {path:':id/edit', component: RecipeEditComponent} 
    ] },
    { path: 'signup', component: SignupComponent},
    { path: 'signin', component: SigninComponent},
    { path:'**', component: RecipesComponent }
  ]


@NgModule({
    declarations: [],
    imports: [ RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule],
    providers: [],
})
export class AppRoutingModule {



 
}