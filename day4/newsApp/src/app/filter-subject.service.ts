import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class FilterSubjectService {

  public subject:  Subject<string> = new Subject<string>(); 

  constructor() { }

}
