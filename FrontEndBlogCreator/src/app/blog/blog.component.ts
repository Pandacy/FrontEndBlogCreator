import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from './blog.service';




@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  data
  constructor(private blog: BlogService, private activatedRoute: ActivatedRoute) {
    this.blog.getBlog().subscribe((data) => {
      this.data = data;
    })
  }

  ngOnInit(): void {
  }

}
