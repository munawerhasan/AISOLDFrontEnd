import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

import { MasteremployeeRoutingModule } from './masteremployee-routing.module';
import { MasteremployeeListComponent } from './components/masteremployee-list/masteremployee-list.component';
import { MasteremployeeAddComponent } from './components/masteremployee-add/masteremployee-add.component';
import { MasteremployeeUpdateComponent } from './components/masteremployee-update/masteremployee-update.component';

@NgModule({
  declarations: [MasteremployeeListComponent, MasteremployeeAddComponent, MasteremployeeUpdateComponent],
  imports: [
    CommonModule,
    MasteremployeeRoutingModule,
    CommonModule,       
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasteremployeeModule { }
