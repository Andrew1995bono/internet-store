import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from 'ngx-pagination';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllProductsContentComponent } from './components/all-products-components/all-products-content/all-products-content.component';
import { AsideComponent } from './components/all-products-components/all-products-content/aside/aside.component';
import { CategoriesComponent } from './components/all-products-components/all-products-content/aside/categories/categories.component';
import { FarmsComponent } from './components/all-products-components/all-products-content/aside/farms/farms.component';
import { RatingComponent } from './components/all-products-components/all-products-content/aside/rating/rating.component';
import { SliderComponent } from './components/all-products-components/all-products-content/aside/slider/slider.component';
import { ProductCardComponent } from './components/all-products-components/all-products-content/product-card/product-card.component';
import { AllProductsTitleComponent } from './components/all-products-components/all-products-title/all-products-title.component';
import { AllProductsComponent } from './components/all-products-components/all-products.component';
import { FooterComponent } from './components/all-products-components/footer/footer.component';
import { SortInputComponent } from './components/all-products-components/sort-input/sort-input.component';
import { HeaderInfoComponent } from './components/homepage-components/header/header-info/header-info.component';
import { HeaderComponent } from './components/homepage-components/header/header.component';
import { HomepageContentComponent } from './components/homepage-components/homepage-content/homepage-content.component';
import { InputFieldComponent } from './components/homepage-components/navbar/input-field/input-field.component';
import { NavbarComponent } from './components/homepage-components/navbar/navbar.component';
import { SelectFieldComponent } from './components/homepage-components/navbar/select-field/select-field.component';
import { PagesTitleComponent } from './components/homepage-components/pages-title/pages-title.component';
import { ProductDetailComponent } from './components/product-detail-components/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderInfoComponent,
    NavbarComponent,
    InputFieldComponent,
    SelectFieldComponent,
    PagesTitleComponent,
    HomepageContentComponent,
    AllProductsComponent,
    AllProductsTitleComponent,
    SortInputComponent,
    AllProductsContentComponent,
    AsideComponent,
    ProductCardComponent,
    CategoriesComponent,
    FarmsComponent,
    RatingComponent,
    SliderComponent,
    FooterComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDividerModule,
    MatButtonModule,
    MatCheckboxModule,
    FlexLayoutModule,
    NgxSliderModule,
    NgxPaginationModule,
    MatSelectModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
