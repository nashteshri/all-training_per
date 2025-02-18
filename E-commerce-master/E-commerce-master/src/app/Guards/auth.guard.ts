import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private service: LoginService, private router: Router) {}

  canActivate(): boolean {
    if (this.service.isAdmin()) {
      return true; // Allow access if the user is authenticated
    } else {
      //this.router.navigate(['/login']); // Redirect to login if not authenticated
      alert("Login first");
      return false; // Prevent access to the route
    }
  }

}