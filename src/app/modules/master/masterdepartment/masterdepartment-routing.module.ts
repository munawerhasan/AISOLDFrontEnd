import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterdepartmentListComponent } from './components/masterdepartment-list/masterdepartment-list.component';
import { MasterdepartmentAddComponent } from './components/masterdepartment-add/masterdepartment-add.component';
import { MasterdepartmentUpdateComponent } from './components/masterdepartment-update/masterdepartment-update.component';

const routes: Routes = [
 
  {
    path: 'list',
    component: MasterdepartmentListComponent,
    data: {
      title: 'Master Department',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: MasterdepartmentAddComponent,
    data: {
      title: 'Add',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: MasterdepartmentUpdateComponent,
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
export class MasterdepartmentRoutingModule { }
