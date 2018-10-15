import { Pipe, PipeTransform } from '@angular/core';
import { Client } from '../models/client';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Client[], args: any[]): any {
    if (!items) { return []; }
    return items.filter(client => client.firstName.toLowerCase().includes(args[0].toLowerCase())
    && (client.address === args[1] || args[1] === '') );
  }

}
