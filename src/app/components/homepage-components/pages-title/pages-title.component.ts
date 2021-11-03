import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages-title',
  templateUrl: './pages-title.component.html',
  styleUrls: ['./pages-title.component.css']
})

export class PagesTitleComponent implements OnInit {

  public titleState: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
