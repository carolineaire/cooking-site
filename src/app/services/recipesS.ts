import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class RecipesS {
  private readonly http = inject(HttpClient);

  getRecipes(): Observable<RecipesResponse> {
    return this.http.get<RecipesResponse>(environment.apiRecipesUrl);
  }
}
