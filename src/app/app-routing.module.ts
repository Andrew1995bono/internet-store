import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products-components/all-products.component';
import { HomepageContentComponent } from './components/homepage-components/homepage-content/homepage-content.component';
import { ProductDetailResolver } from './components/product-detail-components/product-detail-resolver';
import { ProductDetailComponent } from './components/product-detail-components/product-detail.component';

const routes: Routes = [
  { path: 'home', component: HomepageContentComponent },
  { path: 'allProducts', component: AllProductsComponent, data: { title: 'All products' } },
  {
    path: 'allProducts/:id',
    component: ProductDetailComponent,
    resolve: { product: ProductDetailResolver },
    data: { title: 'Product detail' }
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
