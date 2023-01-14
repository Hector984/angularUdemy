import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: white;
        }
    `],
})
export class ServerComponent {
    serverId = 10;
    serverStatus: string = 'offline';
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName:string = "";
    serverNameBinding:string = "Test server";
    serverCreated= false;
    servers = ['Test server', 'Test server 2'];
    

    constructor() {
        setTimeout(() =>{
            this.allowNewServer = true;
        }, 2000);

        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus(){
        return this.serverStatus;
    }

    onCreateServer() {
        this.serverCreated = true;
        this.servers.push(this.serverName);
        this.serverCreationStatus = `Server ${this.serverNameBinding} was created`;
    }

    onUpdateServerName(event: any) {
        this.serverName = (<HTMLInputElement>event.target).value;
    }

    getColor()
    {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}