import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterwingListComponent } from './components/masterwing-list/masterwing-list.component';
import { MasterwingAddComponent } from './components/masterwing-add/masterwing-add.component';
import { MasterwingUpdateComponent } from './components/masterwing-update/masterwing-update.component';

const routes: Routes = [
 
  {
    path: 'list',
    component: MasterwingListComponent,
    data: {
      title: 'Master Wing',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: MasterwingAddComponent,
    data: {
      title: 'Add',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: MasterwingUpdateComponent,
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
export class MasterwingRoutingModule { }
