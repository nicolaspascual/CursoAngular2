import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import { Message } from "app/message";
import { MesaggeService } from "app/mesagge.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  private  message : Message;
  private title: string;

  constructor(private route: ActivatedRoute, private messagesService: MesaggeService) {

      this.route.params.subscribe(
         (params: Params) =>  
                  this.message =  messagesService.getMessage(params['id'])
      );
      this.title = this.route.snapshot.data['title'];
   }

  ngOnInit() {
  }

}
