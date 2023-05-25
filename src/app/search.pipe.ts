import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(item:any,args?: any): any {
    if(!args){
      return item;
    }
    return item.filter((hotels: {address:any})=>
    hotels.address.toLocaleLowerCase().indexOf(args) > -1);
  }
}
