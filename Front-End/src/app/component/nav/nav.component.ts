import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  
  openNav = false;

  isLogin = false;

  constructor() { }

  ngOnInit(): void {
    if(localStorage.getItem('admin')) {
      this.isLogin = true
    } else {
      this.isLogin = false
    } 
  }

  openedNav() {
    this.openNav = !this.openNav
  }

  closeNav() {
    this.openNav = false
  }

}
