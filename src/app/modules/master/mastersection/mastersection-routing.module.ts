import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MastersectionListComponent } from './components/mastersection-list/mastersection-list.component';
import { MastersectionAddComponent } from './components/mastersection-add/mastersection-add.component';
import { MastersectionUpdateComponent } from './components/mastersection-update/mastersection-update.component';

const routes: Routes = [
 
  {
    path: 'list',
    component: MastersectionListComponent,
    data: {
      title: 'Master Section',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: MastersectionAddComponent,
    data: {
      title: 'Add',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: MastersectionUpdateComponent,
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
export class MastersectionRoutingModule { }
