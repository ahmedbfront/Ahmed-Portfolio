import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component 
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    loadChildren: () => import('./component/views/about/module/about.module').then(m => m.AboutModule)
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./component/views/portfolio/module/portfolio.module').then(m => m.PortModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./component/views/contact/module/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'dash',
    loadChildren: () => import('./dashboard/module/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
