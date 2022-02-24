import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';
import { ConfigurationDetailsComponent } from "./components/configuration-details/configuration-details.component";

const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    data: {
      title: 'School Admin Dashboard',
      icon: 'icon-layout-sidebar-left',
      caption: 'This is the Admin Dashboard',
      status: true
    }
  },
  {
    path: 'list',
    component: AdminListComponent,
    data: {
      title: 'School Admin',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'add',
    component: AdminAddComponent,
    data: {
      title: 'Add School Admin',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'update/:userId',
    component: AdminUpdateComponent,
    data: {
      title: 'update School Admin',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'configuration-details',
    component: ConfigurationDetailsComponent,
    data: {
      title: 'Configuration Details',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'configuration-details/:configurationId',
    component: ConfigurationDetailsComponent,
    data: {
      title: 'Configuration Details',
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
export class AdminRoutingModule { }
