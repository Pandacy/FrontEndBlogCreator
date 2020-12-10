import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient} from '@angular/common/http';

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
      tnc: ['', Validators.required]
    });
  }
  get fval() {
    return this.registerForm.controls;
  }

  signup() {
    var user = new FormData();
    user.append("name", this.registerForm.get('fullName').value);
    user.append("email", this.registerForm.get('email').value);
    user.append("password", this.registerForm.get('password').value);
    var object = {};
    user.forEach(function (value, key) {
      object[key] = value;
    });
    var json = JSON.stringify(object);
    this.http.post('http://localhost:9090/user', {body : json, headers : 'application/json'}).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
