import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

interface user {
  name : string;
  email : string;
  password : string;
}

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.scss']
})
export class UserformComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  title = 'reactive-form';

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    });
  }
  get fval() {
    return this.registerForm.controls;
  }

  signup() {
    var data = {
      'name' : this.registerForm.get('fullName').value,
      'email' : this.registerForm.get('email').value,
      'password': this.registerForm.get('password').value
    };
    
    this.http.post('http://localhost:9090/user', JSON.stringify(data), httpOptions).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    )
  }
}
