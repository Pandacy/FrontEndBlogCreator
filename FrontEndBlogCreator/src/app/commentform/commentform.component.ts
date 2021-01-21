import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

interface message {
  name : string;
}

@Component({
  selector: 'app-commentform',
  templateUrl: './commentform.component.html',
  styleUrls: ['./commentform.component.scss']
})
export class CommentformComponent implements OnInit {
  commentForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  title = 'reactive-form';

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
      content: ['', Validators.required],
    });
  }
  get fval() {
    return this.commentForm.controls;
  }

  placemessage() {
    var data = {
      'content' : this.commentForm.get('content').value,
    };
    
    this.http.post('http://localhost:9090/comment', JSON.stringify(data), httpOptions).subscribe(
      (response) => console.log(response),
      (error) => console.log(error),
    )
  }
}
