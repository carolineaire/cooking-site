import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { Auth } from '../services/auth';

export const userGuard: CanActivateChildFn = (childRoute, state) => {
  const router: Router = inject(Router)
  const authService = inject(Auth)
  // Simulation de controle Auth
  const isAuth: boolean = authService.getCurrentStatus();

  if (isAuth) {
    return true
  }

  // Navigation
  router.navigate(
    [''],
    {
      queryParams: {
        returnUrl: state.url,
        message: "Vous devez être connecter pour accéder à cette page"
      }
    }
  )
  return false;    
};
