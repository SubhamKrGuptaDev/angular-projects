import { Component } from '@angular/core';

@Component({
  selector: 'app-single-server',
  templateUrl: './single-server.component.html',
  styleUrls: ['./single-server.component.css']
})
export class SingleServerComponent {
  serverStatus:string = ''

  constructor() {
    this.serverStatus = (Math.random() > 0.5) ? 'offline' : 'online';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

}
