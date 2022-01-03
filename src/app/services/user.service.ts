import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel } from '../components/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersURL: string = 'https://jsonplaceholder.typicode.com/users'



  constructor(private http: HttpClient) { }

  getAllusers(): Observable<UserModel[]> {
    return this.http.get<UserModel[]>(this.usersURL)
  }

  getOneUser(id: number): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.usersURL}/${id}`)
  }

}
