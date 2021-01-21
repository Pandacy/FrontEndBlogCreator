import { Component, OnInit } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  data = []
  constructor(private comment: CommentService) {
    this.comment.getData().subscribe((data: any[]) => {
      this.data = data;
    })
  }

  ngOnInit(): void {
  }

}
