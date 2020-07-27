import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'upKebab'
})
export class UpKebabPipe implements PipeTransform {

  transform(text: string): unknown {
    return text.replace(/\s+/g, '-').toUpperCase();
  }

}
