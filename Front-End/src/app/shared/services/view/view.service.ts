import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ViewService {

  apiUrl = 'https://www.ahmedbfront-api.cf'

  constructor(
    private http: HttpClient,
  ) { }

  // Home
  getHome(): Observable <any> {
    return this.http.get(`${this.apiUrl}/home`)
  }

  // About 
  getAbout(): Observable <any> {
    return this.http.get(`${this.apiUrl}/about`);
  }

  // Portfolio 
  getProjects() {
    return this.http.get(`${this.apiUrl}/project`)
  }

  // Contact 
  sendMsg(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/contact`, data)
  }

}
