import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassListComponent } from './components/class-list/class-list.component';
import { ClassAddComponent } from './components/class-add/class-add.component';
import { ClassUpdateComponent } from './components/class-update/class-update.component';

const routes: Routes = [
  {
    path: 'list',
    component: ClassListComponent,
    data: {
      title: 'Classes',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: ClassAddComponent,
    data: {
      title: 'Add Class',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:Id',
    component: ClassUpdateComponent,
    data: {
      title: 'Update Class',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
