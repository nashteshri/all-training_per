import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router'; // Correct import
import { Role } from './role.enum'; // Ensure this path is correct
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerGuard implements CanActivate {
  private router = inject(Router);
  // private authService = 

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
     
  if(!this.authService.isUserAuthenticated())
  {
      return false;
  }
  return true;
 }

 constructor(private authService: AuthService){}

}