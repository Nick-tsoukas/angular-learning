import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus = 'No Server Created ...';
  serverCreated = false;
  serverName: string = "";
  servers = ['Test server one', 'Test server 2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000)
   }
    
  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = `Server was created : ${this.serverName}`;
    this.servers.push('serverName');
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
