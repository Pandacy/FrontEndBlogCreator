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
import { BloglistComponent } from './bloglist/bloglist.component';
import { LoginguardGuard } from './loginguard.guard';


const routes: Routes = [
  { path: 'userform-component', component: UserformComponent },
  { path: 'blogform-component', component: BlogformComponent,  canActivate:[LoginguardGuard] },
  { path: 'messageform-component', component: MessageformComponent,  canActivate:[LoginguardGuard] },
  { path: 'commentform-component', component: CommentformComponent,  canActivate:[LoginguardGuard] },
  { path: 'blog-component', component: BlogComponent,  canActivate:[LoginguardGuard] },
  { path: 'message-component', component: MessageComponent,  canActivate:[LoginguardGuard] },
  { path: 'comment-component', component: CommentComponent,  canActivate:[LoginguardGuard] },
  { path: 'bloglist-component', component: BloglistComponent },
  { path: 'authorize-component', component: AuthorizationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
