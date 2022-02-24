import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasteremployeeListComponent } from './components/masteremployee-list/masteremployee-list.component';
import { MasteremployeeAddComponent } from './components/masteremployee-add/masteremployee-add.component';
import { MasteremployeeUpdateComponent } from './components/masteremployee-update/masteremployee-update.component';

const routes: Routes = [
 
  {
    path: 'list',
    component: MasteremployeeListComponent,
    data: {
      title: 'Master Employee',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: MasteremployeeAddComponent,
    data: {
      title: 'Add',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: MasteremployeeUpdateComponent,
    data: {
      title: 'Update',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasteremployeeRoutingModule { }
