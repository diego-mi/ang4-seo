import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Post} from '../models/post';

@Injectable()
export class PostService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private postsUrl = 'http://ec2-34-204-53-170.compute-1.amazonaws.com:3000/api/posts';

  constructor(private http: Http) {
  }

  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl)
      .toPromise()
      .then(response =>  response.json())
      .catch(this.handleError);
  }

  getPost(id: string): Promise<Post> {
    return this.http.get(this.postsUrl + '/' + id)
      .toPromise()
      .then(response =>  response.json())
      .catch(this.handleError);
  }

  create(post: Post): Promise<Post> {
    return this.http
      .post(this.postsUrl, JSON.stringify(post), {headers: this.headers})
      .toPromise()
      .then(response =>  response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
