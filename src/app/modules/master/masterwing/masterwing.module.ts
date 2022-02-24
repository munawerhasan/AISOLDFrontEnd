import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

import { MasterwingRoutingModule } from './masterwing-routing.module';
import { MasterwingAddComponent } from './components/masterwing-add/masterwing-add.component';
import { MasterwingUpdateComponent } from './components/masterwing-update/masterwing-update.component';
import { MasterwingListComponent } from './components/masterwing-list/masterwing-list.component';

@NgModule({
  declarations: [MasterwingAddComponent, MasterwingUpdateComponent, MasterwingListComponent],
  imports: [
    CommonModule,
    MasterwingRoutingModule,
    CommonModule,       
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterwingModule { }
