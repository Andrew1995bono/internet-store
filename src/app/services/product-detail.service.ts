import { Injectable } from '@angular/core';
import { ProductCard } from '../interfaces/product-card';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  public addToCartItems: number = JSON.parse(localStorage.getItem('products') || '').length;
  public addedProducts: ProductCard[] = [];


  constructor() {}

  public pushProductToStorage(product: ProductCard): void {
    if (this.isJsonContainValue(localStorage.getItem('products') || '')) {
      this.addedProducts = JSON.parse(localStorage.getItem('products') || '');
    }
    this.addedProducts.push(product);
    localStorage.setItem('products', JSON.stringify(this.addedProducts));
    this.addToCartItems = JSON.parse(localStorage.getItem('products') || '').length;
  }

  private isJsonContainValue(json: string): boolean {
    try {
      JSON.parse(json);
    } catch (e) {
      return false;
    }
    return true;
  }


}
