import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client/client.service';
import { TaskTabService } from '../../services/task-tab/task-tab.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clients: Client[];
  cities = ['New York', 'Paris', 'Tokyo', 'Dubai', 'London', 'Moscow', 'Kiev', 'Berlin', ''];
  firstName = '';
  selectedValue = '';

  constructor(private clientService: ClientService, private taskTab: TaskTabService) {}

  ngOnInit() {
    this.clientService.getClients().subscribe(result => this.clients = result.json() as Client[]);
  }

  changeTab(client) {
    this.taskTab.changeClient(client);
  }
}
