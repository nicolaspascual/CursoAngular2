import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ListMessagesComponent } from './list-messages/list-messages.component';
import { MessageComponent } from './message/message.component';
import { MesaggeService } from "app/mesagge.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListMessagesComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [MesaggeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
