import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) { }
  getData()
  {
    let url = "http://localhost:9090/user";
    return this.httpClient.get(url);
  }
  addUser(payload) {
    this.httpClient.post("http://localhost:9090/user", payload, { headers: new HttpHeaders().set("Content-Type", "application/json")});
  }
}