import { Injectable } from '@angular/core';
import {Contact} from './contact'

@Injectable()
export class ContactsService {

  contacts = [];

  constructor() { 
    this.addUser(new Contact("Nicolas", "Pascual", 985261346));
    this.addUser(new Contact("Nicolas", "Pascual", 985261347));
    this.addUser(new Contact("Nicolas", "Pascual", 985261348));
    this.addUser(new Contact("Nicolas", "Pascual", 985261349));
    this.addUser(new Contact("Nicolas", "Pascual", 985261340));
  }

  deleteUser(phoneNumber:number){
    for(let i = 0;i < this.contacts.length;i++){
      if(this.contacts[i].phoneNumber == phoneNumber)
        this.contacts.splice(i,1);
    }
  }

  addUser(name:string, surnames:string, phone:number){
    this.contacts.push(
      new Contact(
        name,
        surnames,
        phone
      )
    );
  }

}
