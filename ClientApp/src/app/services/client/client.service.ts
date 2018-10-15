import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ClientService {

  constructor(private http: Http) { }

  getClients() {
    return this.http.get('api/Client/GetClients');
  }

}
