import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { ProductCard } from '../../interfaces/product-card';
import { AllProductsService } from '../../services/all-products.service';

@Injectable()
export class ProductDetailResolver implements Resolve<ProductCard[]> {

  constructor(
    private allProductsService: AllProductsService
  ) { }

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ProductCard[]> {
    const id = route.params.id;
    return this.allProductsService.getProducts().pipe(
      take(1),
      map((products: ProductCard[]) => ({ products: products, id: id })),
      catchError(err => of(err))
    );

  }
}
