import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule }    from '@angular/http';

import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostService } from './services/post.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    PostRoutingModule
  ],
  declarations: [PostListComponent],
  providers: [PostService]
})
export class PostModule { }
