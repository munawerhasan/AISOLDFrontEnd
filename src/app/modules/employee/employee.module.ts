import { NgModule } from '@angular/core';
import { ChartModule } from 'angular2-chartjs';
import { AgmCoreModule } from '@agm/core';
import { CommonModule } from '@angular/common';
import { DataTableModule } from 'angular2-datatable';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { AccountDetailComponent } from './components/account-detail/account-detail.component';
import { PersonalDetailComponent } from './components/personal-detail/personal-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FinalComponent } from './components/final/final.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { MapClassEmployeeSubjectComponent } from './components/map-class-employee-subject/map-class-employee-subject.component';
import { UpdateEmployeeComponent } from './components/update-employee/update-employee.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { SubjectTeacherMappingComponent } from './components/subject-teacher-mapping/subject-teacher-mapping.component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    AccountDetailComponent,
    PersonalDetailComponent,
    NavbarComponent,
    FinalComponent,
    EmployeeDashboardComponent,
    AddEmployeeComponent,
    MapClassEmployeeSubjectComponent,
    UpdateEmployeeComponent,
    SubjectTeacherMappingComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule,
    NgxSpinnerModule,
    AutocompleteLibModule,
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
  ],
})
export class EmployeeModule { }
