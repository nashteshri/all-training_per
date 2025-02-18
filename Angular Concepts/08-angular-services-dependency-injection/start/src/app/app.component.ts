import { Component } from '@angular/core';
import { subscribeServices } from './Services/subscribe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[subscribeServices]
})
export class AppComponent {
  title = 'angular-services-dependency-injection';
}
