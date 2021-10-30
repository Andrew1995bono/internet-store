import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'app-all-products-content',
  templateUrl: './all-products-content.component.html',
  styleUrls: ['./all-products-content.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AllProductsContentComponent implements OnInit {

  @Input() products?: any;
  p: number = 3;
  constructor() { }

  ngOnInit(): void {
  }

}
