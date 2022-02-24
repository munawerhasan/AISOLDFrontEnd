import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasteroccupationListComponent } from './components/masteroccupation-list/masteroccupation-list.component';
import { MasteroccupationAddComponent } from './components/masteroccupation-add/masteroccupation-add.component';
import { MasteroccupationUpdateComponent } from './components/masteroccupation-update/masteroccupation-update.component';

const routes: Routes = [
 
  {
    path: 'list',
    component: MasteroccupationListComponent,
    data: {
      title: 'Master Occupation',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: MasteroccupationAddComponent,
    data: {
      title: 'Add',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: MasteroccupationUpdateComponent,
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
export class MasteroccupationRoutingModule { }
