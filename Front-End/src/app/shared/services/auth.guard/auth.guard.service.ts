import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor() { }

  canActivate(): boolean { 
    if(localStorage.getItem('admin')) {
      return true
    }
  }

}
