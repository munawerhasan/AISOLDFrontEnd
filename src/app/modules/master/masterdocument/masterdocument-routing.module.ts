import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MasterdocumentListComponent } from './components/masterdocument-list/masterdocument-list.component';
import { MasterdocumentAddComponent } from './components/masterdocument-add/masterdocument-add.component';
import { MasterdocumentUpdateComponent } from './components/masterdocument-update/masterdocument-update.component';

const routes: Routes = [
 
  {
    path: 'list',
    component: MasterdocumentListComponent,
    data: {
      title: 'Master Document',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: MasterdocumentAddComponent,
    data: {
      title: 'Add',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: MasterdocumentUpdateComponent,
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
export class MasterdocumentRoutingModule { }
