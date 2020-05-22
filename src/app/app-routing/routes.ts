import { Routes } from '@angular/router';

import { CatalogComponent } from '../catalog/catalog.component';
import { RecipedetailComponent } from '../recipedetail/recipedetail.component';
import { SharerecipeComponent } from '../sharerecipe/sharerecipe.component';

export const routes: Routes = [
    {path: 'catalog', component: CatalogComponent},
    {path: 'recipedetail/:id', component: RecipedetailComponent},
    {path: 'sharerecipe', component: SharerecipeComponent },
    {path: '', redirectTo: '/catalog', pathMatch: 'full' }
]