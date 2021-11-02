import { Component, OnInit } from '@angular/core';
import {FiltersService} from "../../../../../services/all-products/filters/filters.service";
import {Output, EventEmitter} from "@angular/core";

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent implements OnInit {

  public farmNames: string[] = [];
  @Output() farmValue = new EventEmitter<string>();

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.getFarmsName();
  }

  getFarmsName(): void {
    this.filtersService.products.subscribe(data => {
      this.farmNames = (data.map(el => el.farm) as string[]).filter((item,i,arr) => arr.indexOf(item) === i);
    })
  }

  getFarmValue($event: any):void {
    this.farmValue.emit($event);
  }

}
