import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterbatchListComponent } from './components/masterbatch-list/masterbatch-list.component';
import { MasterbatchAddComponent } from './components/masterbatch-add/masterbatch-add.component';
import { MasterbatchUpdateComponent } from './components/masterbatch-update/masterbatch-update.component';

const routes: Routes = [
 
  {
    path: 'list',
    component: MasterbatchListComponent,
    data: {
      title: 'Master Batch',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: MasterbatchAddComponent,
    data: {
      title: 'Add',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: MasterbatchUpdateComponent,
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
export class MasterbatchRoutingModule { }
