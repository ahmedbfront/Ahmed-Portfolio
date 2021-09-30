import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  apiUrl = 'https://www.ahmedbfront-api.cf'

  constructor(
    private http: HttpClient
  ) { }

  logIn(data: any): Observable <any> {
    return this.http.post(`${this.apiUrl}/auth/login`, data)
  }

}
