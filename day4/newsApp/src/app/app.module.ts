import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ReportListComponent } from './report-list/report-list.component';
import { UserComponent } from './user/user.component';
import { SortComponent } from './sort/sort.component';
import { FilterComponent } from './filter/filter.component';
import { ReportComponent } from './report/report.component';
import { SortPipe } from './sort.pipe';
import { FilterPipe } from './filter.pipe';
import { UserService } from "app/user.service";
import { ReportService } from "app/report.service";
import { MainComponent } from './main/main.component';
import { SortSubjectService } from "app/sort-subject.service";
import { FilterSubjectService } from "app/filter-subject.service";

@NgModule({
  declarations: [
    AppComponent,
    ReportListComponent,
    UserComponent,
    SortComponent,
    FilterComponent,
    ReportComponent,
    SortPipe,
    FilterPipe,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [UserService, ReportService, SortSubjectService, FilterSubjectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
