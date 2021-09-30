import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PortService {

  apiUrl = 'https://www.ahmedbfront-api.cf'

  constructor(
    private http: HttpClient,
  ) {}

  // Home
  getHome(): Observable <any> {
    return this.http.get(`${this.apiUrl}/home`)
  }

  isLoggedIn() {
    return localStorage.getItem('admin');
  }

}
