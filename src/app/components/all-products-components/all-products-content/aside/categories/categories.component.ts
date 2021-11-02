import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  public categories: string[] = ['Fruits', 'Vegetables', 'Berries', 'Nuts'];
  public items: number[] = [320, 112, 32, 48];
  constructor() { }

  ngOnInit(): void {
  }

}
