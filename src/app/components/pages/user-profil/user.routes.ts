import { Routes } from "@angular/router";

export const USER_ROUTES: Routes = [
    { path: '', loadComponent: () => import('./user-profil').then(c => c.UserProfil) },
]