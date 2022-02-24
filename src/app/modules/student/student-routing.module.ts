import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentComponent } from './components/student/student.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { ParentDetailComponent } from './components/parent-detail/parent-detail.component';
import { FinalComponent } from './components/final/final.component';
import { StudentProfileComponent } from "./components/student-profile/student-profile.component";

const routes: Routes = [
  {
    path: '',
    component: StudentDashboardComponent,
    data: {
      title: 'Student Dashboard',
      icon: 'icon-layout-sidebar-left',
      caption: 'This is the Student Dashboard',
      status: true
    }
  },
  {
    path: 'list',
    component: StudentListComponent,
    data: {
      title: 'Students',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: false
    }
  },
  {
    path: 'profile/:userId',
    component: StudentProfileComponent,
    data: {
      title: 'Students',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: true
    }
  },
  {
    path: 'details',
     component: StudentComponent,
    data: {
      title: 'Add Student'
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
        path: 'student-detail',
        component: StudentDetailComponent,
        data: {
          title: 'Student Detail'
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
        path: 'parent-detail',
        component: ParentDetailComponent,
        data: {
          title: 'Parent Detail'
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
export class StudentRoutingModule { }
