import { NgModule } from '@angular/core';
import {DataTableModule} from 'angular2-datatable';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import {SelectModule} from 'ng-select';
import { SubjectRoutingModule } from './subject-routing.module';
import { SubjectListComponent } from './components/subject-list/subject-list.component';
import { SubjectMappingComponent } from './components/subject-mapping/subject-mapping.component';
import { SubjectClassMappingComponent } from './components/subject-class-mapping/subject-class-mapping.component';
import { TeacherMappingComponent } from './components/teacher-mapping/teacher-mapping.component';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [SubjectListComponent, SubjectMappingComponent, SubjectClassMappingComponent, TeacherMappingComponent],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    CommonModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    SelectModule,
    NgxSpinnerModule
  ]
})
export class SubjectModule { }
