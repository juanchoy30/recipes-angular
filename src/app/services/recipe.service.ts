import { Injectable } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RECIPES } from '../shared/recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Recipe[]{
    return RECIPES
  }

  getRecipe(id: string): Recipe {
    return RECIPES.filter((recipe) => (recipe.id === id))[0];
  }
}
