import { Injectable } from '@angular/core';
import { IProduct } from './Iproduct.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ProductsList: IProduct[];
  constructor() {
    this.ProductsList = [
    {id: '1', name: 'Samsung Phone', price: 19000, description: 'Product 1 description', imageUrl: './Mobile.jpg', isAvailable: true, discount: 10, rating: 4},
    {id: '2', name: 'Samsung Tablet S9 FE + ', price: 41000, description: 'Product 2 description', imageUrl: './tablet.jpg', isAvailable: false, discount: 20, rating: 3},
    {id: '3', name: 'Apple Watch 10 |GSEM ', price: 300, description: 'Product 3 description', imageUrl: './Watch.jpg', isAvailable: true, discount: 30, rating: 5},
    {id: '4', name: 'Apple Mac M2', price:39000, description: 'Product 4 description', imageUrl: './MAc.jpg', isAvailable: false, discount: 40, rating: 2},
    ]
   }

   getProductList(): IProduct[] {
    return this.ProductsList;
   }

   addProductList(product: IProduct): void {
    this.ProductsList.push(product);
   }
   removeProductList(id: string | number): void {
    this.ProductsList = this.ProductsList.filter(p => p.id !== id);
   }
}

