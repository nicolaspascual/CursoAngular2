import { Component, OnInit } from '@angular/core';
import { FilterSubjectService } from "app/filter-subject.service";

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  private text_filter : string;

  constructor(private filterSubject : FilterSubjectService) { }

  ngOnInit() {
  }

  update(){
    this.filterSubject.subject.next(this.text_filter);
  }

}
