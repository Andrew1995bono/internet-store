import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  public addToCartItems: number = 0;

  constructor() {}
}
