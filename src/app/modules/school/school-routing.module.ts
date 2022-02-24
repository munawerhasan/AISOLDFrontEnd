import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SchoolDashboardComponent } from './components/school-dashboard/school-dashboard.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolAddComponent } from './components/school-add/school-add.component';
import { SchoolUpdateComponent } from './components/school-update/school-update.component'

const routes: Routes = [
  {
    path: '',
    component: SchoolDashboardComponent,
    data: {
      title: 'School Dashboard',
      icon: 'icon-layout-sidebar-left',
      caption: 'This is School Dashboard',
      status: true
    }
  },
  {
    path: 'list',
    component: SchoolListComponent,
    data: {
      title: 'Schools',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: SchoolAddComponent,
    data: {
      title: 'Add School',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:schoolId',
    component: SchoolUpdateComponent,
    data: {
      title: 'update School',
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
export class SchoolRoutingModule { }
