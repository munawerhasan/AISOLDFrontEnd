import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssignmentTeacherComponent } from './components/assignment-teacher/assignment-teacher.component';
import { AssignmentStudentComponent } from './components/assignment-student/assignment-student.component';
import { AssignmentAddComponent } from './components/assignment-add/assignment-add.component';
import { UserAssignmentActivityComponent } from "./components/user-assignment-activity/user-assignment-activity.component";
import { AssignmentAssessmentComponent } from "./components/assignment-assessment/assignment-assessment.component";
import { AssignmentAssessmentStudentComponent } from "./components/assignment-assessment-student/assignment-assessment-student.component";

const routes: Routes = [
  {
    path: 'teacher',
    component: AssignmentTeacherComponent,
    data: {
      title: 'Assignment Publisher',
      icon: 'icon-layout-sidebar-left',
      caption: 'This is Teacher Dashboard',
      status: false
    }
  },
  {
    path: 'student',
    component: AssignmentStudentComponent,
    data: {
      title: 'Student Assignment',
      icon: 'icon-layout-sidebar-left',
      caption: 'This is Teacher Dashboard',
      status: false
    }
  },
  {
    path: 'add',
    component: AssignmentAddComponent,
    data: {
      title: 'Student Assignment',
      icon: 'icon-layout-sidebar-left',
      caption: 'This is Teacher Dashboard',
      status: false
    }
  },
  {
    path: 'user-assignment-activity/:Id',
    component: UserAssignmentActivityComponent,
    data: {
      title: 'Student Assignment Activity',
      icon: 'icon-layout-sidebar-left',
      caption: 'This is Teacher Dashboard',
      status: false
    }
  },
  {
    path: 'student-assessment',
    component: AssignmentAssessmentStudentComponent,
    data: {
      title: 'Student Assignment Assessment',
      icon: 'icon-layout-sidebar-left',
      caption: 'This is Teacher Dashboard',
      status: false
    }
  },
  {
    path: 'assessment/:Id',
    component: AssignmentAssessmentComponent,
    data: {
      title: 'Student Assignment Assessment',
      icon: 'icon-layout-sidebar-left',
      caption: 'This is Teacher Dashboard',
      status: false
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }
