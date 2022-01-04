import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PostModel } from '../components/models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {


postURL = 'https://jsonplaceholder.typicode.com/posts';


  constructor(private http: HttpClient) { }


getAllPosts(): Observable<PostModel[]>{
  return this.http.get<PostModel[]>(this.postURL)
}
getOnePost(id: number): Observable<PostModel>{
  return this.http.get<PostModel>(`${this.postURL}/${id}`)
}

}
