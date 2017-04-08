import { Component, OnInit } from '@angular/core';
import{PersonService} from '../person.service';
import {Person} from '../person';


@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  people : Person[];


  constructor(private personService:PersonService) { 
    this.refresh();   
  }

  ngOnInit() {
    
  }

  refresh(){
    this.personService.getUsers(10).subscribe(
      people => this.people = people
    );
  }

}
