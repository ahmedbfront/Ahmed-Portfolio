import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Port } from './interface/port';
import { ViewService } from 'src/app/shared/services/view/view.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})

export class PortfolioComponent implements OnInit, OnDestroy {

  allProjects: Port;

  observable: Subscription;

  constructor(
    private viewServ: ViewService,
  ) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.observable = this.viewServ.getProjects().subscribe((res: any) => {
      this.allProjects = res.reverse();
    });
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }

}
