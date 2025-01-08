import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  newMessage:string = '';
  Users:string[] = ["Azizur Rahman", "Atikur Rahman", "Saimun Hossain", "Samiun Islam"];
  messages: { user: string; message: string }[] = [
    { user: "Alice", message: "Hi there! How are you?" },
    { user: "Bob", message: "I'm good, thanks! How about you?" },
    { user: "Alice", message: "I'm doing well. Just working on a project." },
    { user: "Bob", message: "That sounds interesting. What's it about?" },
    { user: "Alice", message: "It's a chat application with Angular and SignalR." },
    { user: "Bob", message: "Nice! Need any help with it?" },
    { user: "Alice", message: "Maybe later! Thanks for offering." },
    { user: "Bob", message: "No problem. Just let me know!" },
    { user: "Alice", message: "Will do! Talk to you soon." },
    { user: "Bob", message: "Bye for now!" }
  ];
  
  sendMessage() {

  }
}
