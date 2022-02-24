import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartModule } from 'angular2-chartjs';
import { AgmCoreModule } from '@agm/core';

import { DataTableModule } from 'angular2-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

import { StudentRoutingModule } from './student-routing.module';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentDashboardComponent } from './components/student-dashboard/student-dashboard.component';
import { StudentComponent } from './components/student/student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentDetailComponent } from './components/student-detail/student-detail.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { ParentDetailComponent } from './components/parent-detail/parent-detail.component';
import { FinalComponent } from './components/final/final.component';
import { StudentProfileComponent } from "./components/student-profile/student-profile.component";
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentDashboardComponent,
    StudentComponent, 
    NavbarComponent,
    StudentDetailComponent,
    AccountDetailComponent,
    PersonalDetailComponent,
    ParentDetailComponent,
    FinalComponent,
    StudentProfileComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    NgxSpinnerModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
  ]
})
export class StudentModule { }
