import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {

  @Output() farmValue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  getFarmValue($event:any):void {
    this.farmValue.emit($event);
  }
}
