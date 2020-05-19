import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RECIPES } from '../shared/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Promise<Recipe[]>{
    return new Promise(resolve => {
      setTimeout(() => resolve(RECIPES),2000);
    });
  }

  getRecipe(id: string): Promise<Recipe> {
    return new Promise(resolve => {
      setTimeout(() => resolve(RECIPES.filter((recipe) => (recipe.id === id))[0]), 2000);
    });  
  }
}
