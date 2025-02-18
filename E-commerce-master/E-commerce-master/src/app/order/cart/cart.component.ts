import { Component, OnInit } from '@angular/core';
import { ECommerceService } from '../../services/e-commerce.service';
import { Product } from '../../models/models';

@Component({
  selector: 'app-cart',
  standalone: false,
  
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})

export class CartComponent implements OnInit {
  constructor(private service:ECommerceService){}
  cartList:Array<Product>=[];
  totalPrice:number=0;
  
  ngOnInit(){
    this.cartList=this.service.getCart();
    this.totalPrice=this.service.getTotalPrice();
  }

  removeCart(item:Product){
    this.service.removeCart(item);
    this.totalPrice=this.service.getTotalPrice();
  }
}
