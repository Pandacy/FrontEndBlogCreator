import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommentService {
  constructor(private httpClient: HttpClient) { }
  getData()
  {
    let url = "http://localhost:9090/comment";
    return this.httpClient.get(url);
  }
  addComment(payload) {
    this.httpClient.post("http://localhost:9090/comment", payload, { headers: new HttpHeaders().set("Content-Type", "application/json")});
  }
}