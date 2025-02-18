import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => 
      import('./user/user.module').then((m) => m.UserModule),
  },
  {
    path: 'products',
    loadChildren: () => 
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: 'orders',
    loadChildren: () => 
      import('./order/order.module').then((m) => m.OrderModule),
  },
  {
    path: 'cart',
    loadChildren: () => 
      import('./product/product.module').then((m) => m.ProductModule),
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full', // Added pathMatch to avoid infinite redirect loop
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }