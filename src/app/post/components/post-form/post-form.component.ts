import {Component, Input, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  constructor(private postService: PostService, meta: Meta, title: Title) {
    title.setTitle('My Spiffy Home Page');

    meta.addTags([
      {
        name: 'author', content: 'Coursetro.com'
      },
      {
        name: 'keywords', content: 'angular 4 tutorial, angular seo'
      },
      {
        name: 'description', content: 'This is my great description.'
      },
    ]);
  }

  @Input() post: Post;

  ngOnInit() {
    this.post = new Post();

    this.post.title = '';
    this.post.description = '';
  }

  add(): void {
    console.log(this.post);
    this.postService.create(this.post)
      .then(post => console.log('ok'));
  }
}
