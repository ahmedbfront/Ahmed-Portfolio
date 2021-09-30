import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'src/app/shared/services/auth.guard/auth.guard.service';

// Component
import { LoginComponent } from '../component/auth/login/login.component';
import { DashboardComponent } from '../component/dashboard/dashboard.component';
import { MessageComponent } from '../component/message/message.component';
import { UpdateComponent } from '../component/update/update.component';
import { UploadComponent } from '../component/upload/upload.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'log',
        component: LoginComponent,
      },
      {
        path: 'upload',
        component: UploadComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'message',
        component: MessageComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'update',
        component: UpdateComponent,
        canActivate: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
