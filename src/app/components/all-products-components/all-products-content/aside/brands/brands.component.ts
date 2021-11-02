import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
  public filters: string[] = ['Price', 'Popularity', 'Name', 'Freshness'];
  constructor() { }

  ngOnInit(): void {
  }

}
