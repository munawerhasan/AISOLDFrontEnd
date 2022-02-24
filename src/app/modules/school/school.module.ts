import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartModule} from 'angular2-chartjs';

import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

import { SchoolRoutingModule } from './school-routing.module';
import { SchoolDashboardComponent } from './components/school-dashboard/school-dashboard.component';
import { SchoolListComponent } from './components/school-list/school-list.component';
import { SchoolAddComponent } from './components/school-add/school-add.component';
import { SchoolUpdateComponent } from './components/school-update/school-update.component';


@NgModule({
  declarations: [
    SchoolDashboardComponent, 
    SchoolListComponent, 
    SchoolAddComponent, SchoolUpdateComponent
  ],
  imports: [
    CommonModule,
    SchoolRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    ChartModule
  ]
})
export class SchoolModule { }
