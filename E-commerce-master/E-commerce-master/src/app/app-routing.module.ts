import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddProductComponent } from './product/add-product/add-product.component';
import { CartComponent } from './order/cart/cart.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LogInComponent } from './user/log-in/log-in.component';
import { ManagerGuard } from './Guards/manager.guard';
import { AdminGuard } from './Guards/admin.guard';
import { AuthGuard } from './Guards/auth.guard';

const routes: Routes = [
  {path:'userList',component:UserListComponent,canActivate:[ManagerGuard]},
  {path:'addProduct',component:AddProductComponent,canActivate:[AdminGuard]},
  {path:'productList',component:ProductListComponent},
  {path:'cart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'registration',component:RegistrationComponent},
  {path:'logIn',component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
