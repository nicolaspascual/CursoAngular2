import { Injectable } from '@angular/core';
import { Message } from "app/message";

@Injectable()
export class MesaggeService {

  messages : Message[] = [];

  constructor() { 
    this.messages.push(new Message(0,"HELLO","HELLO BODY"));
    this.messages.push(new Message(1,"AGAIN","AGAIN BODY"));
    this.messages.push(new Message(2,"BYE","BYE BODY"));
    this.messages.push(new Message(3,"BYE BYE","BYE BYE BODY"));

  }


  getMessage(id: number) : Message{
    for(let message of this.messages)
      if(message.id == id)
        return message;
  }

  findAll(): Message[]{
    return this.messages;
  }

}
