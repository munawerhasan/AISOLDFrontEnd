import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamRoutingModule } from './exam-routing.module';
import { AddExamComponent } from './components/add-exam/add-exam.component';
import { ListExamComponent } from './components/list-exam/list-exam.component';
import { UpdateExamComponent } from './components/update-exam/update-exam.component';

@NgModule({
  declarations: [AddExamComponent, ListExamComponent, UpdateExamComponent],
  imports: [
    CommonModule,
    ExamRoutingModule
  ]
})
export class ExamModule { }
