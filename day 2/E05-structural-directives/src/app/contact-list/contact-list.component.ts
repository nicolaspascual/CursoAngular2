import { Component, OnInit } from '@angular/core';
import {Contact} from '../contact';
import {ContactsService} from '../contacts.service'

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  toAddPhone: number;
  toAddName: string;
  toAddSurnames: string;

  toEditPhone: number;
  isHidden : string;
  

  constructor(private contacts_service : ContactsService) { 
   
  }

  deleteUser(phoneNumber:number){
    this.contacts_service.deleteUser(phoneNumber)
  }

  togleHiddenList(){
    this.isHidden = (this.isHidden=="hidden")?"visible":"hidden";
  }

  addUser(){
    this.contacts_service.addUser(
        this.toAddName,
        this.toAddSurnames,
        this.toAddPhone
    );
  }

  ngOnInit() {
  }

}
