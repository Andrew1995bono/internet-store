import { Component, OnInit } from '@angular/core';
import { BreadcrumbsService } from '../../../services/breadcrumbs.service';

@Component({
  selector: 'app-pages-title',
  templateUrl: './pages-title.component.html',
  styleUrls: ['./pages-title.component.scss']
})

export class PagesTitleComponent implements OnInit {


  constructor(public breadcrumbsService: BreadcrumbsService) { }

  ngOnInit(): void {

  }


}


