import { Component, OnInit } from '@angular/core';
import { ECommerceService } from '../../services/e-commerce.service';
import { Product } from '../../models/models';

@Component({
  selector: 'app-product-list',
  standalone: false,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
    constructor(private service:ECommerceService){}
    productList:Array<Product>=[];


    ngOnInit(){
      this.productList=this.service.getProduct();
    }

    addToCart(item:Product){
      this.service.addCart(item);
    }

}
