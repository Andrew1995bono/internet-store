import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/homepage-components/header/header.component';
import { HeaderInfoComponent } from './components/homepage-components/header/header-info/header-info.component';
import {MatDividerModule} from "@angular/material/divider";
import { NavbarComponent } from './components/homepage-components/navbar/navbar.component';
import { InputFieldComponent } from './components/homepage-components/navbar/input-field/input-field.component';
import { SelectFieldComponent } from './components/homepage-components/navbar/select-field/select-field.component';
import { PagesTitleComponent } from './components/homepage-components/pages-title/pages-title.component';
import { HomepageContentComponent } from './components/homepage-components/homepage-content/homepage-content.component';
import {MatButtonModule} from '@angular/material/button';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { AllProductsTitleComponent } from './components/all-products/all-products-title/all-products-title.component';


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
    AllProductsTitleComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatDividerModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
