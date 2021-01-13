import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { BlogformComponent } from './blogform/blogform.component';
import { CommentComponent } from './comment/comment.component';
import { CommentformComponent } from './commentform/commentform.component';
import { MessageComponent } from './message/message.component';
import { MessageformComponent } from './messageform/messageform.component';
import { UserformComponent } from './userform/userform.component';
import { AuthorizationComponent } from './authorization/authorization.component';

const routes: Routes = [
  { path: 'userform-component', component: UserformComponent },
  { path: 'blogform-component', component: BlogformComponent },
  { path: 'messageform-component', component: MessageformComponent },
  { path: 'commentform-component', component: CommentformComponent },
  { path: 'blog-component', component: BlogComponent },
  { path: 'message-component', component: MessageComponent },
  { path: 'comment-component', component: CommentComponent },
  { path: 'authorize-component', component: AuthorizationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
