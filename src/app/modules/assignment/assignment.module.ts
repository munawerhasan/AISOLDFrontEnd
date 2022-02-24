import { NgModule } from '@angular/core';
import { DataTableModule } from 'angular2-datatable';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { BarRatingModule } from 'ngx-bar-rating';
import { AssignmentRoutingModule } from './assignment-routing.module';
import { AssignmentTeacherComponent } from './components/assignment-teacher/assignment-teacher.component';
import { AssignmentStudentComponent } from './components/assignment-student/assignment-student.component';
import { AssignmentAddComponent } from './components/assignment-add/assignment-add.component';
import { AssignmentSubmitComponent } from './components/assignment-submit/assignment-submit.component';
import { AssignmentAssessmentComponent } from './components/assignment-assessment/assignment-assessment.component';
import { UserAssignmentActivityComponent } from './components/user-assignment-activity/user-assignment-activity.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ToastyModule } from 'ng2-toasty';
import { DragulaModule } from 'ng2-dragula';
import { AssignmentAssessmentStudentComponent } from './components/assignment-assessment-student/assignment-assessment-student.component';

@NgModule({
  declarations: [AssignmentTeacherComponent, AssignmentStudentComponent, AssignmentAddComponent, AssignmentSubmitComponent, AssignmentAssessmentComponent, UserAssignmentActivityComponent, AssignmentAssessmentStudentComponent],
  imports: [
    CommonModule,
    AssignmentRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    BarRatingModule,
    NgxSpinnerModule,
    DragulaModule,
    ToastyModule.forRoot()
  ]
})
export class AssignmentModule { }
