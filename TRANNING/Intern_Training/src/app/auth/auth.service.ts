import { inject, Injectable } from '@angular/core';
import { Router } from 'express';
import { Role } from './role.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private route = inject(Router);
  constructor() {
    localStorage.setItem('islogedIn',JSON.stringify(false));
    localStorage.setItem('role',JSON.stringify(Role['Customer']));

   }

  login(role:Role){
    localStorage.setItem('islogedIn',JSON.stringify(true));
    localStorage.setItem('role',JSON.stringify(Role[role]));
  }

  isUserAuthenticated(){
    const isLoggedIn = localStorage.getItem('islogedIn');
    return isLoggedIn
  }
}

