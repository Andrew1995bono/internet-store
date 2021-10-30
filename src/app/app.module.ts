import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/homepage-components/header/header.component';
import { HeaderInfoComponent } from './components/homepage-components/header/header-info/header-info.component';
import { MatDividerModule } from "@angular/material/divider";
import { NavbarComponent } from './components/homepage-components/navbar/navbar.component';
import { InputFieldComponent } from './components/homepage-components/navbar/input-field/input-field.component';
import { SelectFieldComponent } from './components/homepage-components/navbar/select-field/select-field.component';
import { PagesTitleComponent } from './components/homepage-components/pages-title/pages-title.component';
import { HomepageContentComponent } from './components/homepage-components/homepage-content/homepage-content.component';
import {MatButtonModule} from '@angular/material/button';
import { AllProductsComponent } from './components/all-products-components/all-products.component';
import { AllProductsTitleComponent } from './components/all-products-components/all-products-title/all-products-title.component';
import { SortInputComponent } from './components/all-products-components/sort-input/sort-input.component';
import { AllProductsContentComponent } from './components/all-products-components/all-products-content/all-products-content.component';
import { AsideComponent } from './components/all-products-components/all-products-content/aside/aside.component';
import { ProductCardComponent } from './components/all-products-components/all-products-content/product-card/product-card.component';
import { CategoriesComponent } from './components/all-products-components/all-products-content/aside/categories/categories.component';
import { BrandsComponent } from './components/all-products-components/all-products-content/aside/brands/brands.component';
import { RatingComponent } from './components/all-products-components/all-products-content/aside/rating/rating.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { SliderComponent } from './components/all-products-components/all-products-content/aside/slider/slider.component';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { FlexLayoutModule } from "@angular/flex-layout";
import {NgxPaginationModule} from "ngx-pagination";
import { FooterComponent } from './components/all-products-components/footer/footer.component';


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
    BrandsComponent,
    RatingComponent,
    SliderComponent,
    FooterComponent,
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
        provideFirebaseApp(() => initializeApp(environment.firebase)),
        provideAuth(() => getAuth()),
        provideFirestore(() => getFirestore())
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
