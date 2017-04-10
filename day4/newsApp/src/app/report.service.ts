import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Report } from "app/report";

@Injectable()
export class ReportService implements OnInit {

   private url = 'https://node-hnapi.herokuapp.com/news?page=1';

   private reports: Report[];
  


  constructor(private http: Http) {  
    http.get(this.url)
  }

  ngOnInit(): void {
  }


  retrieveReports() : Observable<Report[]>{
    return this.http.get(this.url)
      .map(this.parseReports)
      .catch(this.handleError);
  }

  parseReports(res: Response): Report[]{
    var result = []
    var id = 0;
    for(let json of res.json())
    if(json['user'] != '' && json['url'] != '' && json['title'] != '' && json['comments_count'] != 0 && json['points'] != 0)
        result.push(
          new Report(
            id++,          
            json["user"],
            json["url"],
            json['title'],
            json["comments_count"],
            json["points"],
            new Date(json["time"]*1000)
          )
      );
    
    return result;
  }

  handleError(error: Response | any){
    let errMsg;
    if(error instanceof Response){
      const body = error.json() || '';
      const err =  JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`
    }else{
      errMsg = error.message ? error.message : error.toString();
    }
    console.log(errMsg);
    return Observable.throw(errMsg);
  }

}
