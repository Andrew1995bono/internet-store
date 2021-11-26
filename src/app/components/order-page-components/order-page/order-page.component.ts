import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesCities } from '../../../interfaces/countries-cities';
import { ProductCard } from '../../../interfaces/product-card';
import { countriesAndCities } from './countries-cities-constant';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.scss']
})


export class OrderPageComponent implements OnInit {

  public starArr: string[] = ['', '', '', '', ''];
  public product = {} as ProductCard;
  public countriesAndCitiesArray: CountriesCities[] = countriesAndCities;
  public userForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.setRating(4);
    this.userForm = this.generateUserForm();
    // this.userForm.valueChanges.subscribe(console.log);
  }

  private setRating(rating: number): void {
    this.starArr.fill('../../assets/star-symbol-filled.png', 0, (this.product.rating));
    this.starArr.fill('../../assets/star-symbol-empty.png', this.product.rating, 5);
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

}
