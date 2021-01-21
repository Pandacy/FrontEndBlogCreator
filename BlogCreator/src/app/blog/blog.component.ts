import { Component, OnInit } from '@angular/core';
import { BlogService } from './blog.service';




@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  
  data
  constructor(private blog: BlogService) {
    this.blog.getBlog().subscribe((data) => {
      this.data = data;
      localStorage.setItem("idBlog", data["id"]);
    })
  }

  ngOnInit(): void {
  }

}
