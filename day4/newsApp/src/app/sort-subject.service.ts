import { Injectable } from '@angular/core';
import { Subject } from "rxjs";

@Injectable()
export class SortSubjectService {

  public subject:  Subject<string> = new Subject<string>(); 

  constructor() { }

}
