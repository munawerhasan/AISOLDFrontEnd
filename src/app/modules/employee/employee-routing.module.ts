import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { FinalComponent } from './components/final/final.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { AddEmployeeComponent } from "./components/add-employee/add-employee.component";
import { SubjectTeacherMappingComponent } from './components/subject-teacher-mapping/subject-teacher-mapping.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';

const routes: Routes = [
  {
    path: '',
    component: EmployeeDashboardComponent,
    data: {
      title: 'Employee Dashboard',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'list',
    component: EmployeeListComponent,
    data: {
      title: 'Employees',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: false
    }
  },
  {
    path: 'add',
    component: AddEmployeeComponent,
    data: {
      title: 'Add Employee',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: false
    }
  },
  {
    path: 'update/:id',
    component:  UpdateEmployeeComponent,
    data: {
      title: 'Update Employee',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: false
    }
  },
  {
    path: 'class-mapping',
    component: SubjectTeacherMappingComponent,
    data: {
      title: 'map-class-employee-subject',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: false
    }
  },
  {
    path: 'details',
     component: EmployeeComponent,
    data: {
      title: 'Add Employee'
    },
    children: [
      {
        path: 'account-detail',
        component: AccountDetailComponent,
        data: {
          title: 'Account Detail'
        }
      },
      {
        path: 'employee-detail',
        component: EmployeeDetailComponent,
        data: {
          title: 'Employee Detail'
        }
      },
      {
        path: 'personal-detail',
        component: PersonalDetailComponent,
        data: {
          title: 'Personal Detail'
        }
      },
      {
        path: 'final',
        component: FinalComponent,
        data: {
          title: 'Final'
        }
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
