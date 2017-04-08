import { Component, OnInit } from '@angular/core';
import { MesaggeService } from "app/mesagge.service";
import { Message } from "app/message";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-list-messages',
  templateUrl: './list-messages.component.html',
  styleUrls: ['./list-messages.component.css']
})
export class ListMessagesComponent implements OnInit {

  private messages: Message[];
  private title : string;

  constructor(private messageService: MesaggeService, private route : ActivatedRoute) {
    this.messages = this.messageService.findAll();
    this.title = this.route.snapshot.data['title'];

   }

  ngOnInit() {
  }

}
