import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { About } from './interface/about';
import { ViewService } from 'src/app/shared/services/view/view.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit, OnDestroy {

  aboutMe: About;

  observable: Subscription;

  constructor(
    private viewServ: ViewService,
  ) { }

  ngOnInit(): void {
    this.getAbout();
  }

  getAbout() {
    this.observable = this.viewServ.getAbout().subscribe(res => {
      for(let about of res) {
        this.aboutMe = about;
      }
    });
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }

}