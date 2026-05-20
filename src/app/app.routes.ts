import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadChildren: () => import('./components/pages/home/main.routes').then(c => c.MAIN_ROUTES)},
    {path: 'recipes', loadChildren: () => import('./components/pages/recipes/recipes.routes').then(c => c.RECIPES_ROUTES)},
    {path: 'login', loadChildren: () => import('./components/authentication/auth.routes').then(c => c.AUTH_ROUTES)},
    {path: 'admin', loadChildren: () => import('./components/admin/admin.routes').then(c => c.ADMIN_ROUTES)},
    {path: 'profile', loadChildren: () => import('./components/pages/user-profil/user.routes').then(c => c.USER_ROUTES)},
    {path: '**', redirectTo: '', pathMatch: 'full'}
];
