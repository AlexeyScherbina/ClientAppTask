import { Component, OnInit } from '@angular/core';
import { TaskTabService } from '../../services/task-tab/task-tab.service';
import { Client } from '../../models/client';

@Component({
  selector: 'app-client-tasks',
  templateUrl: './client-tasks.component.html',
  styleUrls: ['./client-tasks.component.css']
})
export class ClientTasksComponent implements OnInit {

  client: Client;

  constructor(private taskTab: TaskTabService) { }

  ngOnInit() {
    this.taskTab.currentClient.subscribe(data => this.client = data);
  }

  deleteTask(task) {
    this.client.tasks.splice(this.client.tasks.indexOf(task), 1);
  }

}
