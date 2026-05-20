import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RecipesS {
  private readonly apiUrl = 'https://dummyjson.com/recipes';

  private readonly http = inject(HttpClient);

  getRecipes() {
    return this.http.get<RecipesResponse>(this.apiUrl);
  }
}
