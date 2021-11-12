import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationCategories } from '../../../../interfaces/navigation-categories';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class SelectFieldComponent implements OnInit {

  public navCategoriesList: NavigationCategories [] = [
    { name: 'None', value: 'option' },
    { name: 'Electronics', value: 'option1' },
    { name: 'Food', value: 'option2' },
    { name: 'Clothes', value: 'option3' },
    { name: 'Skin and care', value: 'option4' },
    { name: 'Toys', value: 'option5' },
    { name: 'Special nutrition', value: 'option6' },
    { name: 'Sports and outdoors', value: 'option7' },
    { name: 'Books', value: 'option8' }
  ];
  public arrowDown: string = '../../assets/arrow-down.png';
  public selected: string = this.navCategoriesList[0].value;

  constructor() { }

  ngOnInit(): void {

  }

}
