import { Pipe, PipeTransform } from '@angular/core';
import { Poney } from '../interfaces/poney';

@Pipe({
  name: 'filterPoney'
})
export class FilterPoneyPipe implements PipeTransform {

  transform(poney: Poney[], poneyId: number[]): Poney[] {
    console.log(poney, poneyId);

    return poney ? poney.filter(elementPoney => poneyId.includes(elementPoney.id)) : [];
  }

}
