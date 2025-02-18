import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Role } from './role.enum';

@Injectable({
  providedIn:'root'
})

export class AdminGuard implements CanActivate{
  private authService = inject(AuthService);
  private router = inject(Router);

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    const value = localStorage.getItem('islogedIn');

    if(value !== 'true'){
      this.router.navigate(['/login']);
      return false
    }

    const role = localStorage.getItem('role');
    if(role === Role.Admin){
      return true
    }
    this.router.navigate(['/login']);
    return false
  }
}
