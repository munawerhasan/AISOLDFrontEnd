import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'GenderConversion'
})
export class GenderConversionPipe implements PipeTransform {

  transform(value: any): string {
    status = "";

    if (value === 1) {
      status = "Male";
    }
    else if (value === 2) {
      status = "Female";
    }
    else if (value === 3) {
      status = "Other";
    }
    else
    {
      status = "Unknown";
    }

    return status;
  }

}
