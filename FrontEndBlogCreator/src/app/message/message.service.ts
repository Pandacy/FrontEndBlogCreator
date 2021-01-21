import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
  constructor(private httpClient: HttpClient) { }
  getData()
  {
    return this.httpClient.get("http://localhost:9090/message/" + localStorage.getItem("idBlog"));
  }
  addMessage(payload) {
    this.httpClient.post("http://localhost:9090/message", payload, { headers: new HttpHeaders().set("Content-Type", "application/json")});
  }
  deleteMessage(id){
    this.httpClient.delete("http://localhost:9090/message/" + id).subscribe();
  }
}