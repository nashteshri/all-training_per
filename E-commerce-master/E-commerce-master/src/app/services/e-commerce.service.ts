import { Injectable } from '@angular/core';
import { Product } from '../models/models';

@Injectable({
  providedIn: 'root'
})

export class ECommerceService {
  constructor() { }

  private produtList:Array<Product>=[
    { id: 1, name: 'Product 1', imgUrl: 'https://via.placeholder.com/150', price: 100, rating: 4, description: 'Description for product 1' },
    { id: 2, name: 'Product 2', imgUrl: 'https://via.placeholder.com/150', price: 200, rating: 5, description: 'Description for product 2' },
    { id: 3, name: 'Product 3', imgUrl: 'https://via.placeholder.com/150', price: 150, rating: 3, description: 'Description for product 3' },
    { id: 4, name: 'Product 4', imgUrl: 'https://via.placeholder.com/150', price: 250, rating: 4.5, description: 'Description for product 4' },
    { id: 5, name: 'Product 5', imgUrl: 'https://via.placeholder.com/150', price: 300, rating: 4, description: 'Description for product 5' }
  ];
  
  private cartItem:Array<Product>=[];

  addProduct(product:Product){
    //console.log("Product Added");
    this.produtList.push(product);
  }

  removeProduct(product:Product){
    const index=this.produtList.indexOf(product);
    this.produtList.splice(index,1);
  }

  getProduct(){
    return this.produtList;
  }

  addCart(product:Product){
    //console.log("Product Added");
    this.cartItem.push(product);
  }

  removeCart(product:Product){
    const index=this.cartItem.indexOf(product);
    this.cartItem.splice(index,1);
  }

  getCart(){
    return this.cartItem;
  }

  getTotalPrice(){
    return this.cartItem.reduce((total,item)=>total+item.price,0);
  }

}
