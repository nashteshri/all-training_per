import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../Iproduct.interface';

@Component({
  selector: 'app-display-product',
  standalone: false,
  
  templateUrl: './display-product.component.html',
  styleUrl: './display-product.component.css'
})
export class DisplayProductComponent {
  private productService = inject(ProductService);
  products = this.productService.getProductList();

  role = localStorage.getItem('role');

  CartList: IProduct[] = [];
  constructor() {
    // localStorage.setItem('role', 'Admin');
  }
  ngOnInit() {
    this.products = this.productService.getProductList();
    localStorage.setItem('cart', JSON.stringify(this.CartList));
  }

  addProduct(product: IProduct): void {
    this.productService.addProductList(product);
  }

  removeProduct(id: string | number): void {
    this.productService.removeProductList(id);
  }
  addtoCart(product: IProduct): void {
    this.CartList.push(product);
    alert(`${product.name} added to cart List... `);
    localStorage.setItem('cart', JSON.stringify(this.CartList));
  }
  getCartList():IProduct[]{
    return this.CartList;
  }
  
  
}
