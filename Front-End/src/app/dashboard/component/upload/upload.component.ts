import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, } from '@angular/forms';

import { DashService } from 'src/app/shared/services/dashboard/dash.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})

export class UploadComponent implements OnInit {
  
  fGroup: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private dashServ: DashService
  ) { }

  ngOnInit(): void {
    this.fb();
  }

  uploadProject() {
    let fData = new FormData();

    fData.append('name', this.fGroup.get('name').value);
    fData.append('skills', this.fGroup.get('skills').value);
    fData.append('image', this.fGroup.get('image').value);
    fData.append('preview', this.fGroup.get('preview').value);

    this.dashServ.uploadProject(fData).subscribe((res) => {
      this.fGroup.reset();
      console.log(res);

    })
  }

  selectFile(e: any) {
    if (e.target.files.length > 0) {
      const image = e.target.files[0];
      this.fGroup.get('image').setValue(image);
    }
  }

  fb() {
    this.fGroup = this.fBuilder.group({
      name: [ '', Validators.required ],
      skills: '',
      image: [ '', Validators.required ],
      preview: [ '', Validators.required ],
    });
  }

  get f() { return this.fGroup.controls }


}
