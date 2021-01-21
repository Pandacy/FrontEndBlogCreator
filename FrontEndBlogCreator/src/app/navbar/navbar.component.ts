import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router : Router, private loginService : LoginService) { }

  isAuthenticated = false;
  ngOnInit(): void {
    if (localStorage.getItem('id_token') == undefined) {
      this.isAuthenticated = true;
    }
    else {
      this.isAuthenticated = false;
    }
  }

  Logout(){
    localStorage.clear();
    window.location.reload();
    this.router.navigate(['']);
  }
}
