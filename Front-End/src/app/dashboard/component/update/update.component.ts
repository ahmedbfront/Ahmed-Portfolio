import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';

import { DashService } from 'src/app/shared/services/dashboard/dash.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})

export class UpdateComponent implements OnInit {

  fGroup: FormGroup;

  home: any;
  showHome = false;

  constructor(
    private fBuilder: FormBuilder,
    private dashServ: DashService
  ) { }

  ngOnInit(): void {
    this.fHome();
  }

  getHome() {
    this.showHome = true;

    this.dashServ.getHome().subscribe(res => {
      res.forEach(el => {
        this.home = el;
      });
    })
  }

  editHome() {
    let formData = new FormData();

    formData.append('title', this.fGroup.get('title').value);
    formData.append('preview', this.fGroup.get('preview').value);

    this.dashServ.editHome(formData).subscribe((res) => {
      console.log(res);
    })
  }

  fHome() {
    this.fGroup = this.fBuilder.group({
      title: [ '', Validators.required ],
      paragraph: [ '', Validators.required ],
    });
  }

  get f() { return this.fGroup.controls }

}
