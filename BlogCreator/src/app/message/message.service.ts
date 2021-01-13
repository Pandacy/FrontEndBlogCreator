import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
  constructor(private httpClient: HttpClient) { }
  getData()
  {
    let url = "http://localhost:9090/message";
    return this.httpClient.get(url);
  }
  addMessage(payload) {
    this.httpClient.post("http://localhost:9090/message", payload, { headers: new HttpHeaders().set("Content-Type", "application/json")});
  }
  deleteMessage(id){
    this.httpClient.delete("http://localhost:9090/message/" + id).subscribe();
  }
}