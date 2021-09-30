import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { PortService } from 'src/app/shared/services/port.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit, OnDestroy {

  home: any;

  observable: Subscription;

  constructor(
    private portServ: PortService,
  ) { }

  ngOnInit(): void {
    this.getHome();
  }

  getHome() {
    this.observable = this.portServ.getHome().subscribe(res => {
      res.forEach(el => {
        this.home = el;
      });
    });
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }

}
