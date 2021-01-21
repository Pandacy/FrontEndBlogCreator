import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  isAuthenticated = false;
  isLoggedIn() {
    if (!localStorage.getItem('id_token') === null) {
      this.isAuthenticated = true;
      return this.isAuthenticated;
    }
    else {
      this.isAuthenticated = false;
      return this.isAuthenticated;
    }
  }
}
