import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DashService } from 'src/app/shared/services/dashboard/dash.service';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})

export class MessageComponent implements OnInit, OnDestroy {
  
  allMsg: any;
  oneMsg: any;
  
  showMsg = false;
  seen = false;

  observable: Subscription;

  constructor(
    private dashServ: DashService,
  ) { }

  ngOnInit(): void {
    this.getMessage();
  }
  
  getMessage() {
    this.observable = this.dashServ.getMessage().subscribe((res: any) => {
      let dataFilter = res.filter(data => {
        if(data.seen == false) return true;
      })
      this.allMsg = dataFilter.reverse();
    })
  }

  showMessage(id: string) {
    this.showMsg = true;
    this.observable = this.dashServ.oneMessage(id).subscribe((res) => {
      this.oneMsg = res;
      this.seen = res.seen;
    })
  }

  toggleVisibility(e: any) {
    e.target.checked ? this.seen = true :  this.seen = false;
  }

  editMessage(id: string) {
    let data = this.oneMsg;
    data.seen = true;
    this.dashServ.editMessage(id, data).subscribe(res => {
      console.log(res);
      this.showMsg = false;
      this.getMessage();
    })
  }

  hiddenMsg() {
    this.showMsg = false;
  }

  ngOnDestroy() {
    this.observable.unsubscribe();
  }

}
