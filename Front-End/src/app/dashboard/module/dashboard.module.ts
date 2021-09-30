import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { DashboardRoutingModule } from './dashboard-routing.module';

// Component 
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { SidebrComponent } from '../component/sidebr/sidebr.component';
import { UploadComponent } from '../component/upload/upload.component';
import { MessageComponent } from '../component/message/message.component';
import { UpdateComponent } from '../component/update/update.component';
import { LoginComponent } from '../component/auth/login/login.component';

@NgModule({
  declarations: [
    DashboardComponent,
    SidebrComponent,
    UploadComponent,
    MessageComponent,
    UpdateComponent,
    LoginComponent

  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
