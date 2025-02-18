import { Component, inject } from '@angular/core';
import { IProduct } from '../../product/Iproduct.interface';
import { ProductService } from '../../product/product.service';

@Component({
  selector: 'app-order-list',
  standalone: false,

  templateUrl: './order-list.component.html',
  styleUrl: './order-list.component.css'
})
export class OrderListComponent {
  orderList:IProduct[] =[];
  // private productService = inject(ProductService);

  constructor(){
    const cart = localStorage.getItem('cart');
    this.orderList = cart ? JSON.parse(cart) : {};
    console.log(cart);
    
  }
}
