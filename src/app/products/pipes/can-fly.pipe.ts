import {Pipe, PipeTransform} from '@angular/core';

type canFly = 'vuela' | 'no vuela';

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {

  transform(value: boolean): canFly {
    return value ? 'vuela' : 'no vuela';
  }

}
