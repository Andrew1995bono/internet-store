import { Injectable } from '@angular/core';
import { Breadcrumb } from '../interfaces/breadcrumb';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbsService {

  public breadCrumbs: Breadcrumb[] = [];

  constructor() {}


}
