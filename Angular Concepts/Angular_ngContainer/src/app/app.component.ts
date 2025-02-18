import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_ngContainer';
  toggle:Boolean=true;
  onToggle(){
    this.toggle = !this.toggle
  }
}
