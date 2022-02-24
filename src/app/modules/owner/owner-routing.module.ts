import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OwnerDashboardComponent } from './owner-dashboard/owner-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: OwnerDashboardComponent,
    data: {
      title: 'Owner Dashboard',
      icon: 'icon-layout-sidebar-left',
      caption: 'This is the Owner Dashboard',
      status: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
