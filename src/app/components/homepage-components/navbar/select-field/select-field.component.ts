import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-field',
  templateUrl: './select-field.component.html',
  styleUrls: ['./select-field.component.scss']
})

export class SelectFieldComponent implements OnInit {

  public navList: string[] = ['Electronics', 'Food', 'Clothes', 'Skin and care', 'Toys', 'Special nutrition', 'Sports and outdoors', 'Books'];
  public arrowDown: string = '../../assets/arrow-down.png';

  constructor() { }

  ngOnInit(): void {

  }

}
