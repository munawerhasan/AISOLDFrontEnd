import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterclassListComponent } from './components/masterclass-list/masterclass-list.component';
import { MasterclassAddComponent } from './components/masterclass-add/masterclass-add.component';
import { MasterclassUpdateComponent } from './components/masterclass-update/masterclass-update.component';

const routes: Routes = [
   {
    path: 'list',
    component: MasterclassListComponent,
    data:
     {
      title: 'Master Class',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: MasterclassAddComponent,
    data: {
      title: 'Add',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: MasterclassUpdateComponent,
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
export class MasterclassRoutingModule { }
