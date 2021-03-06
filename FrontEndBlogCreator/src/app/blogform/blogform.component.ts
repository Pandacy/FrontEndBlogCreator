import { Component, OnInit, ɵɵresolveBody } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

interface blog {
  description : string;
  title : string;
}

@Component({
  selector: 'app-blogform',
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.scss']
})
export class BlogformComponent implements OnInit {
  blogForm: FormGroup;
  submitted = false;
  error = false;
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }
  title = 'reactive-form';

  ngOnInit(): void {
    this.blogForm = this.formBuilder.group({
      description: ['', Validators.required],
      title: ['', [Validators.required]],
    });
  }
  get fval() {
    return this.blogForm.controls;
  }

  blogrequest() {
    this.submitted = true;
    if  (this.blogForm.valid){
      var data = {
        'description' : this.blogForm.get('description').value,
        'title' : this.blogForm.get('title').value,
        'user' : {
          'name' : localStorage.getItem('name'),
        }
      };
      this.http.post('http://localhost:9090/blog', JSON.stringify(data), httpOptions).subscribe(
        (response) => console.log(response),
        (error) => this.error = true,
      )
    }
  }
}