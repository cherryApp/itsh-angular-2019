import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], phrase: string, key: string = ''): any {
    if (!value || !phrase) {
      return value;
    }

    phrase = phrase.toLowerCase();

    if (key) {
      return value.filter( item => {
        return ('' + item[key]).toLowerCase().indexOf(phrase) > -1;
      });
    }

    return value.filter( item => {
      const str = JSON.stringify(item)
        .replace(/"[^"]*"\:/g, '')
        .replace(/[",\{\}]/g, '');
      return str.toLowerCase().indexOf(phrase) > -1;
    });
  }

}
