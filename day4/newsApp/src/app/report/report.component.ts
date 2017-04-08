import { Component, OnInit, Input } from '@angular/core';
import { Report } from "app/report";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  @Input()
  private report: Report;

  constructor() { }

  ngOnInit() {
  }

}
