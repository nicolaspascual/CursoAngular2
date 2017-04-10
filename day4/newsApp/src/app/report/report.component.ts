import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Report } from "app/report";
import { ReportService } from "app/report.service";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @Input()
  private report: Report;

  @Input() private reports: Report[];
  @Output() private reportsChange  = new  EventEmitter<Report>();

  constructor(private reportService: ReportService) { }

  ngOnInit() {
  }


  delete(){
    this.reportsChange.emit(this.report);

  }

}
