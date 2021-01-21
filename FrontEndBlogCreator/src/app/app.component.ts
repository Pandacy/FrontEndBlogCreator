import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BlogCreator';
  
  public isLoggedIn()
  {
    if (localStorage.getItem('id_token') === null){
      return false;
    }
    return true;
  }
}
