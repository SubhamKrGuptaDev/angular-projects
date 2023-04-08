import { Component } from '@angular/core';

@Component({
  selector: 'app-serve',
  templateUrl: './serve.component.html',
  styleUrls: ['./serve.component.css']
})
export class ServeComponent {
  serverName:string = ''
  serverStatus:string = ''
  // serverCreated:boolean = false
  serverList = ['server 1']

  onCreateServer() {
    // this.serverCreated = true
    this.serverList.push(this.serverName);
  }

}
