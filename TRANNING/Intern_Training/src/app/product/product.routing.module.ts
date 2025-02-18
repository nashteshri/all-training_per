import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayProductComponent } from './display-product/display-product.component';
import { AdminGuard } from '../auth/admin.guard';
import { AddProductComponent } from './add-product/add-product.component';

const routes: Routes = [
  {
    path: 'productlist',
    component: DisplayProductComponent
  },
  {
    path: 'addproduct',
    component: AddProductComponent ,
    // canActivate:[AdminGuard],
},
{
    path:'cart',
    component:DisplayProductComponent // Added cart route to display product
},
  {
    path: '',
    redirectTo: 'productlist',
    pathMatch: 'full', // Added pathMatch to avoid infinite redirect loop
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }