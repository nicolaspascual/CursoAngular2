import { Pipe, PipeTransform } from '@angular/core';
import { Report } from "app/report";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Report[], arg: string): Report[] {
    return value.filter(
      a => a.title.toUpperCase().includes(arg.toUpperCase())
    );
  }

}
