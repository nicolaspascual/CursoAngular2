import { Pipe, PipeTransform } from '@angular/core';
import { Report } from "app/report";

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: Report[], sortField: String): Report[] {
    console.log(value);
    if(value){
      if(sortField == 'date')
        return value.sort(
          (a,b) => {if(a.date < b.date) return -1;
                    else if(a.date > b.date) return 1;
                    else return 0;
                }                  
        ).reverse();
      else
        return value.sort(
            (a,b) => {if(a.pointsN < b.pointsN) return -1;
                      else if(a.pointsN > b.pointsN) return 1;
                      else return 0;
                  }                  
          ).reverse();
    }
    return [];
  }

}
