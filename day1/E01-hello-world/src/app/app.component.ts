import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  name = 'Nicolas';
  surnames = 'Pascual Gonzalez'
  

  mouseOverEventFather(counter: number){
    console.log(
      `Name: ${this.name}.
Surnames: ${this.surnames}.
Counter: ${counter}`);
  }
}
