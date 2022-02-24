import { NgModule } from '@angular/core';
import {DataTableModule} from 'angular2-datatable';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';

import { ClassRoutingModule } from './class-routing.module';
import { ClassListComponent } from './components/class-list/class-list.component';
import { ClassAddComponent } from './components/class-add/class-add.component';
import { ClassUpdateComponent } from './components/class-update/class-update.component';

@NgModule({
  declarations: [ClassListComponent, ClassAddComponent, ClassUpdateComponent],
  imports: [
    CommonModule,
    ClassRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ClassModule { }
