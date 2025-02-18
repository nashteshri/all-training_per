import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { UserModule } from './user/user.module';
import { OrderModule } from './order/order.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { RouterLink } from '@angular/router';
import { ProductRoutingModule } from './product/product.routing.module';
import { UserRoutingModule } from './user/user-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    //NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterLink,
    // UserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
