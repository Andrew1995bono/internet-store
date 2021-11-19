import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './components/all-products-components/all-products.component';
import { HomepageContentComponent } from './components/homepage-components/homepage-content/homepage-content.component';
import { ProductDetailComponent } from './components/product-detail-components/product-detail.component';

const routes: Routes = [
  { path: 'home', component: HomepageContentComponent },
  { path: 'allProducts', component: AllProductsComponent },
  {
    path: 'allProducts/:id', component: ProductDetailComponent
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
