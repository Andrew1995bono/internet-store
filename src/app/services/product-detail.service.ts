import { Injectable } from '@angular/core';
import { ProductCard } from '../interfaces/product-card';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  public addToCartItems: number = 0;
  public addedProducts: ProductCard[] = [];


  constructor() {}

  public pushProductToStorage(product: ProductCard): void {
    this.addedProducts.push(product);
    localStorage.setItem('products', JSON.stringify(this.addedProducts));
  }
}
