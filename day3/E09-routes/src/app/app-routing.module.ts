import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { MessageComponent } from "app/message/message.component";
import { ListMessagesComponent } from "app/list-messages/list-messages.component";

const routes: Routes = [
  { path : '', component: HomeComponent,  data : { title: "Home"} },
  { path : 'profile', redirectTo : '/', pathMatch : 'full'},
  { path : 'messages', component: ListMessagesComponent,  data : { title: "Messages"}, children : [
    { path : ':id', component: MessageComponent,  data : { title: "Message"}}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
