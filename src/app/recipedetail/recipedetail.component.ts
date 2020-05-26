import { Component, OnInit, Inject} from '@angular/core';
import { Recipe } from '../shared/recipe';
import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { RecipeService } from '../services/recipe.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.scss']
})
export class RecipedetailComponent implements OnInit {

  recipe: Recipe;
  recipeIds: string[];
  errMess: string;

  constructor(private recipeservice: RecipeService,
    private route: ActivatedRoute,
    private location: Location,
    @Inject('BaseURL') private BaseURL) { }

  ngOnInit() {
    this.recipeservice.getRecipeIds().subscribe(recipeIds => this.recipeIds = recipeIds);
    this.route.params.pipe(switchMap((params: Params) => this.recipeservice.getRecipe(params['id'])))
    .subscribe(recipe => { this.recipe = recipe},
      errmess => this.errMess = <any>errmess);
  }

  goBack(): void {
    this.location.back();
  }

}
