import { Component, inject, input, InputSignal, OnInit } from '@angular/core';
import { Auth } from '../../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  isAdminAttribute: InputSignal<boolean> = input<boolean>(false);
  isLoggedInAttribute: boolean = false;

  private readonly authService: Auth = inject(Auth);
  private readonly router: Router = inject(Router);

  ngOnInit(){
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedInAttribute = status;
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
