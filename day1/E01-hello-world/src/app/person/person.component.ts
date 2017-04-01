import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() name = "No Funciona"
  @Input() surnames = "No Funciona"
  @Output() mouseOver = new EventEmitter<number>();
  counter = 0;

  constructor() { }

  ngOnInit() {
    
  }

  mouseOverEvent(){   
    console.log(`
      Firing mouse over
    `);
    this.mouseOver.emit(this.counter);
    this.counter++;
    
  }

}
