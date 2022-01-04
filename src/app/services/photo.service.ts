import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PhotoModel } from '../components/models/photo.model';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
photoURL: string = 'https://jsonplaceholder.typicode.com/photos'
  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  getPicture(id:number | ''): Observable<PhotoModel>{
    // const id = this.route.snapshot.params['id']
    console.log(' id:', id);
    return this.http.get<PhotoModel>(`${this.photoURL}/${id}`)
  }
}
