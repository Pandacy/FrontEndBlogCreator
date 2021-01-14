import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss']
})
export class AuthorizationComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;
  error = false;
  get fval() {
    return this.authForm.controls;
  }
  response:any;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router : Router) { }

  ngOnInit() {
    this.authForm = this.formBuilder.group({
      name: ['', Validators.required],
      pass: ['', Validators.required],
    });
  }

  public getAccessToken(){
    var login = {
      'name' : this.authForm.get('name').value,
      'password' : this.authForm.get('pass').value,
    };
    
    let resp=this.httpClient.post("http://localhost:9090/user/login", login, {responseType : 'text'}  );
    resp.subscribe(data=>this.accessApi(data, login.name));
  }


  public accessApi(token, name){
    if (token !== ""){
      let tokenStr = 'Bearer ' + token;
      const headers = new HttpHeaders().set('Authorization', tokenStr);
      localStorage.setItem('id_token', tokenStr);
      localStorage.setItem('name', name);
      this.router.navigate(['']).then(() => {
        window.location.reload();
      });;
    }
    else {
      this.error = true;
    }
  }
  
}
