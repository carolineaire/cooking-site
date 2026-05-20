import { Component, inject } from '@angular/core';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private readonly authService: Auth = inject(Auth);
  private readonly router: Router = inject(Router);

  login(): void{
    this.authService.login();
    this.router.navigate(['/']);
  }

  logout(): void{
    this.authService.logout();
  }

}
