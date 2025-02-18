import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})

export class ManagerGuard implements CanActivate {
  // private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    const value = localStorage.getItem('islogedIn');
    if (value !== 'true') {
      this.router.navigate(['/']);
      return false
    }

    const role = localStorage.getItem('role');
    if (role !== Role.Customer) {
      return true
    }
    this.router.navigate(['/']);
    return false
  }
}
