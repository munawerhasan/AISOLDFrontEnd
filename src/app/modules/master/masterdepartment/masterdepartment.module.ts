import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

import { MasterdepartmentRoutingModule } from './masterdepartment-routing.module';
import { MasterdepartmentUpdateComponent } from './components/masterdepartment-update/masterdepartment-update.component';
import { MasterdepartmentListComponent } from './components/masterdepartment-list/masterdepartment-list.component';
import { MasterdepartmentAddComponent } from './components/masterdepartment-add/masterdepartment-add.component';

@NgModule({
  declarations: [MasterdepartmentUpdateComponent,
     MasterdepartmentListComponent,
     MasterdepartmentAddComponent],
  imports: [
    CommonModule,
    MasterdepartmentRoutingModule,     
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterdepartmentModule { }
