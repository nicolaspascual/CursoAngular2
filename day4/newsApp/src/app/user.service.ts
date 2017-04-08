import { Injectable, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx'
import { User } from "app/user";

@Injectable()
export class UserService implements OnInit {

  private url = 'https://randomuser.me/api/?results=1';
  public user: User;

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.retrieveUsers().subscribe(
      users => this.user = users[0]
    );
  }

  retrieveUsers() : Observable<User[]>{
    return this.http.get(this.url)
      .map(this.parseUsers)
      .catch(this.handleError);
  }

  getUser() : User{
    return this.user;
  }
  
  parseUsers(res: Response): User[]{
    var result = []
    for(let json of res.json()["results"])
      result.push(
        new User(
          json["picture"]["medium"],
          json["name"]["first"],
          Math.floor(Math.random() * 10000) + 10  ,
          Math.floor(Math.random() * 1000) + 5  ,          
          Math.floor(Math.random() * 1000) + 5  
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
