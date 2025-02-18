import { Component } from '@angular/core';
import { subscribeServices } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  //providers:[subscribeServices] //it will tell what to provide 
})
export class SidebarComponent {
  constructor(private sidesubscribe:subscribeServices){ // it will tell what  to provide
  }
  offsubscribe(){
    this.sidesubscribe.OnSubscribeclicked('quaterly');
  }

}
