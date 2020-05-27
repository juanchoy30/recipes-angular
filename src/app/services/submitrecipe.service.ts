import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Recipe } from '../shared/recipe';
import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class SubmitrecipeService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }


  submitRecipe(recipe: Recipe): Observable<Recipe> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<Recipe>( baseURL + 'recipes', recipe, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }
}
