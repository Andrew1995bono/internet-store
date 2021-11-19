import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCard } from '../../interfaces/product-card';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {

  public individualProduct: BehaviorSubject<ProductCard> = new BehaviorSubject<ProductCard>(new ProductCard());


  constructor() {}
}
