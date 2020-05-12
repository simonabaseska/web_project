import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostDetails } from './model/postDetails';

@Injectable({
  providedIn: 'root'
})
export class FeitgramServiceService {

  constructor(private http: HttpClient) { }

  getPosts(): Observable<PostDetails[]> {
    return this.http.get<PostDetails[]>('http://5dfbcd3d0301690014b8fff9.mockapi.io/PostDetails');
  }
}
