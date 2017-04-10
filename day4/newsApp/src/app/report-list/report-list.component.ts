import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from "app/report.service";
import { Report } from "app/report";
import { SortSubjectService } from "app/sort-subject.service";
import { FilterSubjectService } from "app/filter-subject.service";

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  private reports : Report[] = [];

  @Input()
  private sortField: string = 'date';

  @Input()
  private filterField: string = '';

  constructor(private reportService :ReportService, private sortSubject :SortSubjectService, private filterSubject : FilterSubjectService) {

    this.reportService.retrieveReports().subscribe(
        reports => this.reports = reports
    );
    

    this.sortSubject.subject.subscribe(
      sortField => this.sortField = sortField
    );

    this.filterSubject.subject.subscribe(
      filterField => this.filterField = filterField
    );
   }

  ngOnInit() {
  }

  remove(toRemove : Report){
    for(let i = 0;i < this.reports.length;i++)
        if(this.reports[i] == toRemove){
          this.reports.splice(i,1);        
          break;
        }
    this.reports = this.reports.slice();
  }

}
