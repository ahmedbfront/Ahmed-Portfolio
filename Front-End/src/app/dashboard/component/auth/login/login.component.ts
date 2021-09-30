import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  fGroup: FormGroup;
  msgLogin = '';

  constructor(
    private fBuilder: FormBuilder,
    private router: Router,
    private authServ: AuthService
  ) { }

  ngOnInit(): void {
    this.fb();
  }

  login() {
    let formData = new FormData();
    formData.append('email', this.fGroup.get('email').value);
    formData.append('password', this.fGroup.get('password').value);

    this.authServ.logIn(formData).subscribe(res => {
      console.log(res);
      
      if(res.success) {
        localStorage.setItem('admin', res.token);
        this.router.navigateByUrl('/dash');
      } else if(res.msg) {
        this.msgLogin = res.msg;
      }
    })
  }

  fb() {
    this.fGroup = this.fBuilder.group({
      email: [ '', [Validators.required, Validators.email] ],
      password: [ '', Validators.required ]
    });
  }

  get f() { return this.fGroup.controls }

}
