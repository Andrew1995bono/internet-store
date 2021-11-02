import { Injectable } from '@angular/core';
import {ProductCard} from "../../../interfaces/product-card";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class FiltersService {

  public products: BehaviorSubject<ProductCard[]> = new BehaviorSubject([new ProductCard()]);

  constructor() {
  }

}
