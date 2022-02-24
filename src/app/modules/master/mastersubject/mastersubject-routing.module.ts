import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastersubjectListComponent } from './components/mastersubject-list/mastersubject-list.component';
import { MastersubjectAddComponent } from './components/mastersubject-add/mastersubject-add.component';
import { MastersubjectUpdateComponent } from './components/mastersubject-update/mastersubject-update.component';

const routes: Routes = [
 
  {
    path: 'list',
    component: MastersubjectListComponent,
    data: {
      title: 'Master Subject',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: MastersubjectAddComponent,
    data: {
      title: 'Add',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: MastersubjectUpdateComponent,
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
export class MastersubjectRoutingModule { }
