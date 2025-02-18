import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private service: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.service.isAdmin() && this.service.isLoggedIn()) {
      return true; // Allow access if the user is authenticated
    } else {
      //this.router.navigate(['/login']); // Redirect to login if not authenticated
      alert("You are not Admin to access this page");
      return false; // Prevent access to the route
    }
  }

}
