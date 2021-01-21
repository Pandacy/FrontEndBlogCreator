import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserformComponent } from './userform/userform.component';
import { NavbarComponent } from './navbar/navbar.component';

import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogComponent } from './blog/blog.component';
import { CommentComponent } from './comment/comment.component';
import { MessageComponent } from './message/message.component';
import { AdminblogComponent } from './adminblog/adminblog.component';
import { BlogformComponent } from './blogform/blogform.component';
import { MessageformComponent } from './messageform/messageform.component';
import { CommentformComponent } from './commentform/commentform.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { BloglistComponent } from './bloglist/bloglist.component';

import { BlogService } from './blog/blog.service';
import { MessageService} from './message/message.service';
import { CommentService} from './comment/comment.service';
import { LoginService} from './login.service';

@NgModule({
  declarations: [
    AppComponent,
    UserformComponent,
    NavbarComponent,
    BlogComponent,
    CommentComponent,
    MessageComponent,
    AdminblogComponent,
    BlogformComponent,
    MessageformComponent,
    CommentformComponent,
    AuthorizationComponent,
    BloglistComponent,
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    MatMenuModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [ BlogService, MessageService, CommentService, LoginService ],
  bootstrap: [AppComponent]
})
export class AppModule { }