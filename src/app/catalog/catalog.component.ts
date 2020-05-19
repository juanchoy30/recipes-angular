import { Component, OnInit, ViewChild } from '@angular/core';
import { MediaChange, ObservableMedia } from '@angular/flex-layout';
import { Recipe } from '../shared/recipe';
import { RecipeService } from '../services/recipe.service';
import { MatGridList } from '@angular/material/grid-list';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  @ViewChild('grid') grid: MatGridList;

  recipes: Recipe[];
  gridByBreakpoint = {
    xl: 2,
    lg: 2,
    md: 2,
    sm: 2,
    xs: 1
  }


  constructor(private recipeService: RecipeService,
    private observableMedia: ObservableMedia) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes);
  }

  ngAfterContentInit() {
    this.observableMedia.asObservable().subscribe((change: MediaChange) => {
      this.grid.cols = this.gridByBreakpoint[change.mqAlias];
    });
  }

}
