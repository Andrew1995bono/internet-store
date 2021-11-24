import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products-components/all-products.component';
import { HomepageContentComponent } from './components/homepage-components/homepage-content/homepage-content.component';
import { OrderPageComponent } from './components/order-page-components/order-page/order-page.component';
import { ProductDetailResolver } from './components/product-detail-components/product-detail-resolver';
import { ProductDetailComponent } from './components/product-detail-components/product-detail.component';

const routes: Routes = [
  { path: 'home', component: HomepageContentComponent },
  { path: 'allProducts', component: AllProductsComponent },
  {
    path: 'allProducts/:id',
    component: ProductDetailComponent,
    resolve: { product: ProductDetailResolver }
  },
  { path: 'order', component: OrderPageComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
