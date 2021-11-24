import { Injectable } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { ProductCard } from '../../interfaces/product-card';

@Injectable({
  providedIn: 'root'
})

export class AllProductsService {

  constructor(private firestore: Firestore) { }

  public getProducts(): Observable<ProductCard[]> {
    let collectionProducts: any;
    collectionProducts = collection(this.firestore, 'products-items');
    return collectionData(collectionProducts);
  }

}
