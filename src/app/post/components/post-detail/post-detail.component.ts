import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

import {Post} from '../../models/post';
import {PostService} from '../../services/post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post: Post;

  constructor(private postService: PostService, private route: ActivatedRoute, private location: Location, public meta: Meta, public  title: Title) {
    this.post = new Post();
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.postService.getPost(params.get('id')))
      .subscribe(post => {
        this.post = post;
        this.title.setTitle(this.post.title);

        this.meta.addTags([
          {
            name: 'author', content: 'Coursetro.com'
          },
          {
            name: 'keywords', content: 'angular 4 tutorial, angular seo'
          },
          {
            name: 'description', content: this.post.description
          },
        ]);
      });
  }
}
