import { Component, OnInit, Output } from '@angular/core';
import { SortSubjectService } from "app/sort-subject.service";

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {

  @Output()
  private sortField: string;

  constructor(private sortSubject: SortSubjectService) {
    this.sortSubject.subject.next('date');
   }

   changeSorting(sortMethod : string){
     this.sortSubject.subject.next(sortMethod);
   }

  ngOnInit() {
  }

}
