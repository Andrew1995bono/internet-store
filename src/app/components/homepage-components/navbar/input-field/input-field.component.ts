import { Component, OnInit, ViewEncapsulation } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class InputFieldComponent implements OnInit {

  foods: Food[] = [
    { value: 'fruits-0', viewValue: 'Fruits' },
    { value: 'vegetables-1', viewValue: 'Vegetables' },
    { value: 'berries-2', viewValue: 'Berries' },
    { value: 'nuts-3', viewValue: 'Nuts' }
  ];

  constructor() { }

  ngOnInit(): void {

  }

}
