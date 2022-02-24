import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { ChartModule } from 'angular2-chartjs';
import { DataTableModule } from 'angular2-datatable';
import { AgmCoreModule } from '@agm/core';
import { AppToDoListReadDirective, AppToDoListRemoveDirective } from './components/admin-dashboard/admin-dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';
import { AdminAddComponent } from './components/admin-add/admin-add.component';
import { AdminUpdateComponent } from './components/admin-update/admin-update.component';
import { ConfigurationListComponent } from './components/configuration-list/configuration-list.component';
import { ConfigurationDetailsComponent } from './components/configuration-details/configuration-details.component';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AppToDoListReadDirective,
    AppToDoListRemoveDirective,
    AdminListComponent,
    AdminAddComponent,
    AdminUpdateComponent,
    ConfigurationListComponent,
    ConfigurationDetailsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ChartModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    /*SimpleNotificationsModule.forRoot(),*/
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk' })
  ]
})
export class AdminModule { }
