import { Component, OnInit } from '@angular/core';
import { User } from "app/user";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private user: User;
  private title: string;

  constructor(private route : ActivatedRoute) {
    this.user = new User("Nicolás", "Pascual González",20);
    this.title = this.route.snapshot.data['title'];
   }

  ngOnInit() {
  }

}
