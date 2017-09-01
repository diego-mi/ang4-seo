import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import { FormsModule }   from '@angular/forms';

import {PostRoutingModule} from './post-routing.module';
import {PostListComponent} from './components/post-list/post-list.component';
import {PostService} from './services/post.service';
import { PostFormComponent } from './components/post-form/post-form.component';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    PostRoutingModule
  ],
  declarations: [PostListComponent, PostFormComponent],
  providers: [PostService]
})
export class PostModule {
}
