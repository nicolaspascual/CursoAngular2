import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  private firstName : string;
  private lastName : string;
  private email : string;
  private telephone : number; 

  constructor() {
   }

  ngOnInit() {
  }

}
