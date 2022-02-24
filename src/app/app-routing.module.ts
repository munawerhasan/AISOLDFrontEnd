import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { LoginComponent } from './modules/account/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
import { Role } from './models/role';
import { ComingSoonComponent } from './layout/maintenance/coming-soon/coming-soon.component';
import { Error400Component } from './layout/maintenance/error/error-400/error-400.component';
import { Error403Component } from './layout/maintenance/error/error-403/error-403.component';
import { Error404Component } from './layout/maintenance/error/error-404/error-404.component';
import { Error500Component } from './layout/maintenance/error/error-500/error-500.component';
import { Error503Component } from './layout/maintenance/error/error-503/error-503.component';
import { OfflineUiComponent } from './layout/maintenance/offline-ui/offline-ui.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'owner',
    component: DashboardComponent,canActivate: [AuthGuard], data: { roles: [Role.Owner]},
    children: [
      {
        path: '',
        loadChildren: './modules/owner/owner.module#OwnerModule'
      }
    ]
  },
  {
    path: 'admin',
    component: DashboardComponent,canActivate: [AuthGuard], data: { roles: [Role.Admin,Role.Owner]},
    children: [
      {
        path: '',
        loadChildren: './modules/admin/admin.module#AdminModule'
      }
    ]
  },
  {
    path: 'operator',
    component: DashboardComponent,canActivate: [AuthGuard], data: { roles: [Role.Owner,Role.Admin,Role.Operator]},
    children: [
      {
        path: '',
        loadChildren: './modules/operator/operator.module#OperatorModule'
      }
    ]
  },
  {
    path: 'school',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/school/school.module#SchoolModule'
      }
    ]
  },
  {
    path: 'class',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/class/class.module#ClassModule'
      }
    ]
  },
  {
    path: 'subject',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/subject/subject.module#SubjectModule'
      }
    ]
  },
  {
    path: 'assignment',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/assignment/assignment.module#AssignmentModule'
      }
    ]
  },
  // {
  //   path: 'fee',
  //   component: DashboardComponent,
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './modules/fee/fee.module#FeeModule'
  //     }
  //   ]
  // },
  {
    path: 'fee',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/fee/fee.module#FeeModule'
      }
    ]
  },
  {
    path: 'exam',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/exam/exam.module#ExamModule'
      }
    ]
  },
  {
    path: 'teacher',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/teacher/teacher.module#TeacherModule'
      }
    ]
  },
  {
    path: 'student',
    //component: DashboardComponent,canActivate: [AuthGuard], data: { roles: [Role.Student,Role.Admin]},
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/student/student.module#StudentModule'
      }
    ]
  },
  {
    path: 'employee',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/employee/employee.module#EmployeeModule'
      }
    ]
  },
  {
    path: 'master',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/master/master.module#MasterModule'
      }
    ]
  },
  {
    path: 'onlineclass',
    component: DashboardComponent,
    children: [
      {
        path: '',
        loadChildren: './modules/onlineclass/onlineclass.module#OnlineclassModule'
      }
    ]
  },
  { path: 'coming-soon', component: ComingSoonComponent },
  { path: '400', component: Error400Component },
  { path: '403', component: Error403Component },
  { path: '404', component: Error404Component },
  { path: '500', component: Error500Component },
  { path: '503', component: Error503Component },
  { path: 'offline', component: OfflineUiComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
