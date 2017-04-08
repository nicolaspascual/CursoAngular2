import { Component, OnInit, Input } from '@angular/core';
import { ReportService } from "app/report.service";
import { Report } from "app/report";
import { SortSubjectService } from "app/sort-subject.service";

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.css']
})
export class ReportListComponent implements OnInit {

  private reports : Report[];

  @Input()
  private sortField: string = 'date';

  constructor(private reportService :ReportService, private sortSubject :SortSubjectService) {
    this.reportService.retrieveReports().subscribe(
      reports => this.reports = reports
    );

    this.sortSubject.subject.subscribe(
      sortField => this.sortField = sortField
    );
   }

  ngOnInit() {
  }

}
