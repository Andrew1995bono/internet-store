import { Component, OnInit } from '@angular/core';
import { ProductDetailService } from '../../../../services/product-detail.service';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss']
})

export class HeaderInfoComponent implements OnInit {

  constructor(public productDetailService: ProductDetailService) { }

  ngOnInit(): void {

  }

}
