import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

import { MasteroccupationRoutingModule } from './masteroccupation-routing.module';
import { MasteroccupationListComponent } from './components/masteroccupation-list/masteroccupation-list.component';
import { MasteroccupationAddComponent } from './components/masteroccupation-add/masteroccupation-add.component';
import { MasteroccupationUpdateComponent } from './components/masteroccupation-update/masteroccupation-update.component';

@NgModule({
  declarations: [MasteroccupationListComponent, MasteroccupationAddComponent, MasteroccupationUpdateComponent],
  imports: [
    CommonModule,
    MasteroccupationRoutingModule,
    CommonModule,       
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasteroccupationModule { }
