import { Component, inject, Injectable } from '@angular/core';
import { subscribeServices } from '../Services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  //providers:[subscribeServices]
})

export class HeaderComponent {
  selectedTab: string = 'home';

  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }
  constructor(private subsubsribe:subscribeServices ){}

  onsubsribe(){
    this.subsubsribe.OnSubscribeclicked('montly');
  }
}