import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

import { MasterleaveRoutingModule } from './masterleave-routing.module';
import { MasterleaveAddComponent } from './components/masterleave-add/masterleave-add.component';
import { MasterleaveUpdateComponent } from './components/masterleave-update/masterleave-update.component';
import { MasterleaveListComponent } from './components/masterleave-list/masterleave-list.component';

@NgModule({
  declarations: [MasterleaveAddComponent, MasterleaveUpdateComponent, MasterleaveListComponent],
  imports: [
    CommonModule,
    MasterleaveRoutingModule,
    CommonModule,       
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterleaveModule { }
