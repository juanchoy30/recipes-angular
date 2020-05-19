import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Recipe } from '../shared/recipe';
import { RECIPES } from '../shared/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    return of(RECIPES).pipe(delay(2000));
  }

  getRecipe(id: string): Observable<Recipe> {
    return of(RECIPES.filter((recipe) => (recipe.id === id))[0]).pipe(delay(2000));
  }
}
