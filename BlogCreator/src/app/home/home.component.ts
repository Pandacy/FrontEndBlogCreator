import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  data = []
  constructor(private user: UsersService) {
    this.user.getData().subscribe((data: any[]) => {
      this.data = data;
    })
  }

  ngOnInit(): void {
  }

}
