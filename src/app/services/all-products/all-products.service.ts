import { Injectable } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import {Observable} from "rxjs";
import {ProductCard} from "../../interfaces/product-card";

@Injectable({
  providedIn: 'root'
})
export class AllProductsService {

  constructor(private firestore: Firestore) {

  }
  public getProducts(): Observable<ProductCard[]> {
    let collection1: any;
    collection1 = collection(this.firestore, 'products-items');
    return collectionData(collection1)
  }
}
