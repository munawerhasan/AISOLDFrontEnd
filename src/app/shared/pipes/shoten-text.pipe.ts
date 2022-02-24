import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ShortenText'
})
export class ShortenTextPipe implements PipeTransform {
  transform(value: string, limit = 15, completeWords = false, ellipsis = '...') {
    if (completeWords) {
      limit = value.substr(0, limit).lastIndexOf(' ');
    }
    return value.length > limit ? value.substr(0, limit) + ellipsis : value;
  }
}