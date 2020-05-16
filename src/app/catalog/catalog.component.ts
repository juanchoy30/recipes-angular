import { Component, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe';
import { RECIPES } from '../shared/recipes';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  recipes: Recipe[] = RECIPES;
  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

  onSelect(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }

}
