import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  postRestaurant(data: any) {
    return this.http.post<any>('http://localhost:3000/posts', data).pipe(map((res: any) => {
      return res;
    }))
  }
  getResaturant() {
    return this.http.get<any>('http://localhost:3000/posts').pipe(map((res: any) => {
      return res;
    }))
  }
  updateRestaurant(data: any, id: any) {
    return this.http.put<any>('http://localhost:3000/posts/' + id, data).pipe(map((res: any) => {
      return res;
    }))
  }

  deleteRestaurant(id: any) {
    return this.http.delete('http://localhost:3000/posts/' + id).pipe(map((res: any) => {
      return res;
    }))
  }
}