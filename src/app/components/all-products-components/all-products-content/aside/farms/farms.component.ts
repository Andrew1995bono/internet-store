import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { FiltersService } from '../../../../../services/all-products/filters/filters.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})

export class FarmsComponent implements OnInit {

  @Output() farmValue = new EventEmitter<MatCheckboxChange>();
  public farmNames: string[] = [];

  constructor(private filtersService: FiltersService) {}

  ngOnInit(): void {
    this.getFarmsName();
  }

  private getFarmsName(): void {
    this.filtersService.products.subscribe(data => {
      this.farmNames = (data.map(el => el.farm) as string[]).filter((item, i, arr) => arr.indexOf(item) === i);
    });
  }

  private getFarmValue(event: MatCheckboxChange): void {
    this.farmValue.emit(event);
  }

}
