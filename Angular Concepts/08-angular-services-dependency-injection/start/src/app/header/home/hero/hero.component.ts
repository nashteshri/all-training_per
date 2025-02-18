import { Component, inject } from '@angular/core';
import { subscribeServices } from 'src/app/Services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  //providers:[subscribeServices]//it will tell what to provide    //does not required to define this as we have done it in parent child 
})
export class HeroComponent {

  constructor(private subservice:subscribeServices ){// it will tell how to provide

  }
  onsubscribe(){
    this.subservice.OnSubscribeclicked('yearly');
  }

}
