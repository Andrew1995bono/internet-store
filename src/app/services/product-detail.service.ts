import { Injectable } from '@angular/core';
import { ProductCard } from '../interfaces/product-card';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  public addToCartItems: number = this.checkCartLength();
  public addedProducts: ProductCard[] = [];


  constructor() {}

  public pushProductToStorage(product: ProductCard): void {
    if (this.isJsonContainValue(localStorage.getItem('products') || '')) {
      this.addedProducts = JSON.parse(localStorage.getItem('products') || '');
      this.addToCartItems = JSON.parse(localStorage.getItem('products') || '').length;
    }
    this.addedProducts.push(product);
    localStorage.setItem('products', JSON.stringify(this.addedProducts));
    this.addToCartItems = JSON.parse(localStorage.getItem('products') || '').length;
  }

  private checkCartLength(): number {
    if (this.isJsonContainValue(localStorage.getItem('products') || '')) {
      this.addToCartItems = JSON.parse(localStorage.getItem('products') || '').length;
      return JSON.parse(localStorage.getItem('products') || '').length;
    }
    return 0;
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
