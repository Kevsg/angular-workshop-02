import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upKebab'
})
export class UpKebabPipe implements PipeTransform {

  transform(string: string): unknown {
    return string.replace(/\s+/g, '-').toUpperCase();
  }

}
