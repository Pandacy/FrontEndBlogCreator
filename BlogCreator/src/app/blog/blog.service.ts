import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class BlogService {
  constructor(private httpClient: HttpClient) { 
  }
  getData()
  {
    return this.httpClient.get("http://localhost:9090/blog");
  }
  getBlog()
  {
    console.log(localStorage.getItem('name'));
    return this.httpClient.get("http://localhost:9090/blog/" + localStorage.getItem('name'));
  }
  addBlog(payload) {
    this.httpClient.post("http://localhost:9090/blog", payload, { headers: new HttpHeaders().set("Content-Type", "application/json")});
  }
  updateBlog(payload, id) {
    this.httpClient.post("http://localhost:9090/blog/" + id , payload, { headers: new HttpHeaders().set("Content-Type", "application/json")});
  }
  deleteBlog(id){
      this.httpClient.delete("http://localhost:9090/blog/" + id);
  }
  public isLoggedIn()
  {
    if (localStorage.getItem('id_token') === null){
      return false;
    }
    return true;
  }
}