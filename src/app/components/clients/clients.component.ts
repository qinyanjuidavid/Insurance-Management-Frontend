import { Component } from '@angular/core';
import { Client } from 'src/app/interface/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css'],
})
export class ClientsComponent {
  clients: Client[] = [];
  clientData: Client = {} as Client;

  constructor(private clientsService: ClientService) {}

  ngOnInit(): void {
    this.onGetClients();
  }

  onGetClients() {
    this.clientsService.getClients().subscribe(
      (res) => {
        this.clients = res;
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }
  onGetClient(id: number) {
    this.clientsService.getClient(id).subscribe(
      (res) => {
        this.clientData = res;
        console.log(res);
      },
      (err: any) => console.log(err),
      () => console.log('complete')
    );
  }
}
