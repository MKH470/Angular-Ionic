import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) {}
  getPosts(): Observable<any> {
    const postsContent = this.http.get(this.url);
    return postsContent;
  }
}
