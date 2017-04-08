import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http'
import { Person } from './person';
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx'


@Injectable()
export class PersonService {

  

  private url = 'https://randomuser.me/api/?results=';


  constructor(private http: Http) {  
    http.get(this.url)
  }

  getUsers(num:number) : Observable<Person[]>{
    return this.http.get(this.url+num)
      .map(this.parseUsers)
      .catch(this.handleError);
  }

  parseUsers(res: Response): Person[]{
    var result = []
    for(let json of res.json()["results"])
      result.push(
        new Person(
          json["name"]["first"],
          json["name"]["last"],
          json["email"],
          json["picture"]["medium"],
          json["phone"]
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
