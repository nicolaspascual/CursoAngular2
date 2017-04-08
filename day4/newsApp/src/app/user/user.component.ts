import { Component, OnInit } from '@angular/core';
import { UserService } from "app/user.service";
import { User } from "app/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user: User;

  constructor(private userService : UserService) {
    this.userService.retrieveUsers().subscribe(
      users => this.user = users[0]
    );
   }

  ngOnInit() {
  }

}
