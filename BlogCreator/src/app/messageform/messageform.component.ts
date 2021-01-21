import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

interface message {
  content : string;
}

@Component({
  selector: 'app-messageform',
  templateUrl: './messageform.component.html',
  styleUrls: ['./messageform.component.scss']
})
export class MessageformComponent implements OnInit {
  messageForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }
  title = 'reactive-form';

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      content: ['', Validators.required],
    });
  }
  get fval() {
    return this.messageForm.controls;
  }

  placemessage() {
    this.submitted = true;
    if (this.messageForm.valid){
      var data = {
        'content' : this.messageForm.get('content').value,
        'blog' : {
          'id' : localStorage.getItem('idBlog'),
        }
      };
      console.log(data);
      
      this.http.post('http://localhost:9090/message', JSON.stringify(data), httpOptions).subscribe(
        (response) => console.log(response),
        (error) => console.log(error),
      )
      window.location.reload();
    }
  }
}
