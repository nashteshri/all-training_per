import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { CustomerGuard } from '../auth/customer.guard';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {path:'orderList',component:OrderListComponent,},
  {path:'orderDetails',component:OrderDetailsComponent},
  {
    path:'',
    redirectTo:'orderList',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
