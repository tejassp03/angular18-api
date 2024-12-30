import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor() {}

  private apiUrl = environment.API_URL;
  // private apiUrl = `https://jsonplaceholder.typicode.com/posts`;

  http = inject(HttpClient);

  getPosts() {
    return this.http.get<any>(this.apiUrl).pipe(catchError(this.handleError));
    //Observable<Post[]>
  }

  //Private error function to handle only for this particular service.
  private handleError(error: any) {
    console.error('An error occurred:', error);
    return throwError(() => new Error('Something went wrong'));
  }

  getPostsWithParams(userId: number) {
    let params = new HttpParams().set('userId',userId);
    return this.http
      .get(this.apiUrl, { params })
  }

  getPost(id: number) {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createPost(post: any) {
    return this.http.post<any>(this.apiUrl, post);
  }

  updatePost(id: number, post: any) {
    return this.http.put<any>(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: number) {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
