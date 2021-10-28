import { Component, OnInit } from '@angular/core';
import { Options } from "@angular-slider/ngx-slider";

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  public value: number = 40;
  public highValue: number = 60;
  public options: Options = {
    floor: 0,
    ceil: 100
  };
  constructor() { }

  ngOnInit(): void {
  }

}
