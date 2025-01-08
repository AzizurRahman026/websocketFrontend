import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public connection : any = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5000/chat")
  .configureLogging(signalR.LogLevel.Information)
  .build();//

  constructor() { }

  // start connection
  public async start() {
    try {
      await this.connection.start();
    }
    catch(error) {
      console.log(error);
    }

    // Join Room

    // Send Messages

    // Leave Room
  }
}
