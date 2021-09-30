import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebr',
  templateUrl: './sidebr.component.html',
  styleUrls: ['./sidebr.component.scss']
})

export class SidebrComponent implements OnInit {
  
  isLogin = false;

  openNav = false;

  constructor(
    private router: Router,

  ) { 
    if(localStorage.getItem('admin')) {
      this.isLogin = true
    } else {
      this.isLogin = false
    } 
  }

  ngOnInit(): void {
  }

  openedNav() {
    this.openNav = !this.openNav
  }

  closeNav() {
    this.openNav = false
  }

  signUp() {
    localStorage.removeItem('admin');
    this.router.navigateByUrl('')
  }

}
