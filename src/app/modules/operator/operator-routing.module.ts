import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorDashboardComponent } from './operator-dashboard/operator-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: OperatorDashboardComponent,
    data: {
      title: 'Operator',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatorRoutingModule { }
