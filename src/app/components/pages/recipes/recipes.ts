import { Component, inject, OnInit } from '@angular/core';
import { RecipesS } from '../../../services/recipesS';

@Component({
  selector: 'app-recipes',
  imports: [],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes implements OnInit {
  recipes: RecipesT[] = [];
  private readonly recipesService = inject(RecipesS);

  ngOnInit(): void {
    this.recipesService.getRecipes().subscribe({
      next: (response) => {
        this.recipes = response.recipes;
      },
      error: (error) => {
        console.error('Error fetching recipes:', error);
      }
    });
  }
}
