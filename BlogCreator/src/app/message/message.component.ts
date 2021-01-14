import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from './message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  messageForm: FormGroup;
  submitted = false;
  data = []
  constructor(private message: MessageService, private formBuilder: FormBuilder, private http: HttpClient) {
    this.message.getData(localStorage.getItem("idBlog")).subscribe((data : any[]) => {
      this.data = data;
    })
  }

  deleteMessage(id){
    this.message.deleteMessage(id);
    window.location.reload();
  }

  ngOnInit(): void {
  }

}
