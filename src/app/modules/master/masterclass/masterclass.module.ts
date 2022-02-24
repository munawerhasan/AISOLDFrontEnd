import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableModule} from 'angular2-datatable';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { SharedModule } from '../../../shared/shared.module';

import { MasterclassRoutingModule } from './masterclass-routing.module';
import { MasterclassListComponent } from './components/masterclass-list/masterclass-list.component';
import { MasterclassAddComponent } from './components/masterclass-add/masterclass-add.component';
import { MasterclassUpdateComponent } from './components/masterclass-update/masterclass-update.component';

@NgModule({
  declarations: [MasterclassListComponent, MasterclassAddComponent, MasterclassUpdateComponent],
  imports: [
    CommonModule,
    MasterclassRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class MasterclassModule { }
