import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

import { MastersubjectRoutingModule } from './mastersubject-routing.module';
import { MastersubjectListComponent } from './components/mastersubject-list/mastersubject-list.component';
import { MastersubjectAddComponent } from './components/mastersubject-add/mastersubject-add.component';
import { MastersubjectUpdateComponent } from './components/mastersubject-update/mastersubject-update.component';

@NgModule({
  declarations: [MastersubjectListComponent, MastersubjectAddComponent, MastersubjectUpdateComponent],
  imports: [
    CommonModule,
    MastersubjectRoutingModule,
    CommonModule,       
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MastersubjectModule { }
