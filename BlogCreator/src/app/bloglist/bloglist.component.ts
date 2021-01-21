import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog/blog.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.scss']
})
export class BloglistComponent implements OnInit {

  data = []
  constructor(private blog: BlogService) {
    this.blog.getData().subscribe((data : any) => {
      this.data = data;
    })
  }

  enterBlog(id){
    localStorage.setItem("idBlog", id);
  }

  ngOnInit(): void {
  }

}
