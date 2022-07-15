import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchText: string): any[] {
    if(!value) {
      return [];
    }
    if (!searchText) {
      return value;
    }
    searchText = searchText.toLocaleLowerCase().trim();

    return value.filter(key => {
      return key.name.toLocaleLowerCase().includes(searchText);
    })
  }

}
