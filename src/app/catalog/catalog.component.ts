import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Recipe } from '../shared/recipe';
import { RecipeService } from '../services/recipe.service';
import { expand } from '../animations/app.animation';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
  animations: [
    expand()
  ]
})
export class CatalogComponent implements OnInit {

  recipes: Recipe[];
  errMess: string;


  constructor(private recipeService: RecipeService,
    @Inject('BaseURL') private BaseURL,
    private observableMedia: ObservableMedia) { }

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(recipes => this.recipes = recipes,
      errmess => this.errMess = <any>errmess);
  }

}
