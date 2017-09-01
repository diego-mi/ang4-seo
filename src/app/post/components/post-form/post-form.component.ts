import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService) { }

  @Input() post: Post;

  ngOnInit() {
    this.post = new Post();

    this.post.title = '1';
    this.post.description = '2';
  }

  add(): void {
    console.log(this.post);
    this.postService.create(this.post)
      .then(post => console.log('ok'));
  }
}
