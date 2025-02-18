import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Role } from '../../auth/role.enum';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  private authService = inject(AuthService);
  constructor() { }
  login(role:Role){
    this.authService.login(role);
  }

}
