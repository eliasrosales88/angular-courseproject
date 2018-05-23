import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';



const appRoutes: Routes = [
    { path:'', redirectTo: '/recipes', pathMatch:'full' },
    { path:'shopping-list', component: ShoppingListComponent },
    { path:'recipes', component: RecipesComponent },
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