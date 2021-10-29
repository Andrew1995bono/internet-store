import {Component, Input, OnInit} from '@angular/core';
import {ProductCard} from "../../../interfaces/product-card";

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  public p: number = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
