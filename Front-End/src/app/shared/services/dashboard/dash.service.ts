import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DashService {

  apiUrl = 'https://www.ahmedbfront-api.cf'

  headers: HttpHeaders;

  private token = localStorage.getItem('admin');

  constructor(
    private http: HttpClient
  ) {
    const header = { auth_token: `Bearer ${this.token}`};
    this.headers = new HttpHeaders(header);
  }
  
  // Home 
  getHome(): Observable <any> {
    return this.http.get(`${this.apiUrl}/home`);
  }

  editHome(data: any) {
    return this.http.put(`${this.apiUrl}/home`, data);
  }

  // About
  getAbout() {
    return this.http.get(`${this.apiUrl}/about`);
  }

  editAbout(data: any) {
    return this.http.put(`${this.apiUrl}/about`, data, {headers: this.headers});
  }

  // Project 
  getOneProject(id: string) {
    return this.http.get(`${this.apiUrl}/project/${id}`);
  }

  editProject(data: any) {
    return this.http.put(`${this.apiUrl}/project`, data, {headers: this.headers});
  }

  uploadProject(data: any) {
    return this.http.post(`${this.apiUrl}/project`, data, {headers: this.headers});
  }

  // Message 
  getMessage() {
    return this.http.get(`${this.apiUrl}/contact`, {headers: this.headers});
  }

  oneMessage(id: string): Observable <any> {
    return this.http.get(`${this.apiUrl}/contact/${id}`, {headers: this.headers});
  }

  editMessage(id, data) {
    return this.http.put(`${this.apiUrl}/contact/${id}`, data, {headers: this.headers})
  }

}
