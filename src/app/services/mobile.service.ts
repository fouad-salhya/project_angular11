import { Mobile } from './../model/mobile';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MobileService {
  private url =" http://localhost:3000/mobiles";
  constructor(private http:HttpClient) { }

  getAll() :Observable<Mobile[]> {
      return this.http.get<Mobile[]>(`${this.url}`)
  }

  getOne(id) {
      return this.http.get(`${this.url}/${id}`)
  }

  delete(id) {
      return this.http.delete(`${this.url}/${id}`)
  }

  create(mobile) {
      return this.http.post(`${this.url}`,mobile)
  }

  update(mobile) {
      return this.http.put(`${this.url}/${mobile.id}`,mobile)
  }




}
