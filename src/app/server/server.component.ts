import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline';
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName:string = "";
    serverNameBinding:string = "Test server";

    constructor() {
        setTimeout(() =>{
            this.allowNewServer = true;
        }, 2000)
    }

    getServerStatus(){
        return this.serverStatus;
    }

    onCreateServer() {
        this.serverCreationStatus = `Server ${this.serverNameBinding} was created`;
    }

    onUpdateServerName(event: any) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

}