import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  isAdminAttribute: InputSignal<boolean> = input<boolean>(false)
  isLoggedInAttribute: InputSignal<boolean> = input<boolean>(false)
}
