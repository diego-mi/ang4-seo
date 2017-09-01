import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostFormComponent} from './components/post-form/post-form.component';

const routes: Routes = [
  {
    path: 'post/list',
    component: PostListComponent
  },
  {
    path: 'post/form',
    component: PostFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
