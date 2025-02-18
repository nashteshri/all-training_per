import { Component, OnChanges, OnInit } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'ecommerce';
  isloggedIn:boolean;

  constructor(private service:LoginService){
    this.service.subject.subscribe({
      next:(val)=> this.isloggedIn = val
    })

  }
}
