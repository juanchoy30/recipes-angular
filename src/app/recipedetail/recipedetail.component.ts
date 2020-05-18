import { Component, OnInit} from '@angular/core';
import { Recipe } from '../shared/recipe';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {

  recipe: Recipe;

  constructor(private recipeservice: RecipeService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.recipe = this.recipeservice.getRecipe(id);
  }

  goBack(): void {
    this.location.back();
  }

}
