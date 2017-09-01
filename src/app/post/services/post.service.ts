import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {Post} from '../models/post';

@Injectable()
export class PostService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private postsUrl = 'http://localhost:3000/api/posts';

  constructor(private http: Http) {
  }

  getPosts(): Promise<Post[]> {
    return this.http.get(this.postsUrl)
      .toPromise()
      .then(response =>  response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
