import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesCities } from '../../../interfaces/countries-cities';
import { ProductCard } from '../../../interfaces/product-card';
import { BreadcrumbsService } from '../../../services/breadcrumbs.service';
import { countriesAndCities } from './countries-cities-constant';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})


export class OrderPageComponent implements OnInit {

  public starArr: any[] = [];
  public countriesAndCitiesArray: CountriesCities[] = countriesAndCities;
  public userForm: FormGroup;
  public addedToCartProducts: ProductCard[] = [];
  public subtotalPrice: number = 0;
  public tax: number = 16.53;
  public totalOrder: number = 0;

  constructor(
    private fb: FormBuilder,
    private breadcrumbsService: BreadcrumbsService
  ) { }

  ngOnInit(): void {
    for (let i = 0; i < JSON.parse(localStorage.getItem('products') || '').length; i++) {
      this.starArr.push(Array(5).fill(''));
      this.setRating(JSON.parse(localStorage.getItem('products') || '')[i].rating, i);
      this.subtotalPrice += JSON.parse(localStorage.getItem('products') || '')[i].pricePromotional;
      this.totalOrder = this.subtotalPrice + this.tax;
    }
    this.userForm = this.generateUserForm();
    // this.userForm.valueChanges.subscribe(console.log);
    this.getProduct();
    this.breadcrumbsService.breadCrumbs = [
      { label: 'Homepage /', routerLink: '**' },
      { label: 'Checkout page ', routerLink: 'order' }
    ];
  }

  private setRating(rating: number, i: number): void {
    this.starArr[i].fill('../../assets/star-symbol-filled.png', 0, (rating));
    this.starArr[i].fill('../../assets/star-symbol-empty.png', rating, 5);
  }


  public onSubmit(): void {
    console.warn(this.userForm.value);
  }

  private generateUserForm(): FormGroup {
    return this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailAddress: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', Validators.compose([Validators.required, Validators.pattern(/^([+]?\d{2})?\d{10}$/)])],
      address: [''],
      city: [''],
      country: [''],
      zipPostalCode: ['', Validators.pattern('[0-9]{5}')],
      orderNotes: [''],
      newsSending: [''],
      policyAgreement: ['', Validators.required]
    });
  }

  get form() {
    return this.userForm.controls;
  }

  getProduct(): void {
    this.addedToCartProducts = JSON.parse(localStorage.getItem('products') || '');
  }

}
