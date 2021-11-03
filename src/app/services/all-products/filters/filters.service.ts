import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCard } from '../../../interfaces/product-card';


@Injectable({
  providedIn: 'root'
})

export class FiltersService {

  public products: BehaviorSubject<ProductCard[]> = new BehaviorSubject([new ProductCard()]);
  public itemsPerPage: BehaviorSubject<number> = new BehaviorSubject(0);


  constructor() {
  }


}
