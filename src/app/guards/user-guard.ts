import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const userGuard: CanActivateChildFn = (childRoute, state) => {
  const router: Router = inject(Router)
  // Simulation de controle Auth
  const isAuth: boolean = false

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
