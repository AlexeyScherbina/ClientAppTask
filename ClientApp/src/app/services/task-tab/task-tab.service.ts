import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Client } from '../../models/client';


@Injectable()
export class TaskTabService {

  defaultClient: Client = {
    firstName: '',
    lastName: '',
    address: '',
    phoneNumbers: '',
    tasks: []
  };

  private messageSource = new BehaviorSubject(this.defaultClient);
  currentClient = this.messageSource.asObservable();

  constructor() { }

  changeClient(client: Client) {
    this.messageSource.next(client);
  }

}
