import { SelectByEnum } from './select-by.enum';
import { SortByEnum } from './sort-by.enum';


export interface DropDownEnumInterface {
  value: SortByEnum;
  viewValue: string;
}

export interface DropDownCategoriesEnumInterface {
  value: SelectByEnum;
  viewValue: string;
}
