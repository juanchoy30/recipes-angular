import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Recipe } from '../shared/recipe';
import { map, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseurl';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(baseURL + 'recipes')
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getRecipe(id: string): Observable<Recipe> {
    return this.http.get<Recipe>(baseURL + 'recipes/' + id)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getRecipeIds(): Observable<number[] | any> {
    return this.getRecipes().pipe(map(recipes => recipes.map(recipes => recipes.id)))
    .pipe(catchError(error => error));
  }
  
}
