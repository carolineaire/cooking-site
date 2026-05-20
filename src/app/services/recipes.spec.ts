import { TestBed } from '@angular/core/testing';
import { RecipesS } from './recipesS';

describe('RecipesS', () => {
  let service: RecipesS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipesS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
