import { Component, inject } from '@angular/core';
import { ProductService } from '../product.service';
import { IProduct } from '../Iproduct.interface';

@Component({
  selector: 'app-add-product',
  standalone: false,
  
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent {

  private productService = inject(ProductService);
  product:IProduct[]=[];
  date:Date = new Date();
  constructor() { }
  addProduct(product:IProduct):void{
    this.productService.addProductList(product);
    alert('Product Added Successfully');
  }
}
// id: string
// name: string
// price: number | string
// description: string
// imageUrl: string
// isAvailable: boolean
// discount: number
// rating: number