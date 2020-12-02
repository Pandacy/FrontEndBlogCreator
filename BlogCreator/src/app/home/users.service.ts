import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {
  constructor(private httpClient: HttpClient) { }
  getData()
  {
    let url = "http://localhost:9090/user";
    return this.httpClient.get(url);
  }
}