import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterleaveListComponent } from './components/masterleave-list/masterleave-list.component';
import { MasterleaveAddComponent } from './components/masterleave-add/masterleave-add.component';
import { MasterleaveUpdateComponent } from './components/masterleave-update/masterleave-update.component';

const routes: Routes = [
 
  {
    path: 'list',
    component: MasterleaveListComponent,
    data: {
      title: 'Master Leave',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: MasterleaveAddComponent,
    data: {
      title: 'Add',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: MasterleaveUpdateComponent,
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
export class MasterleaveRoutingModule { }
