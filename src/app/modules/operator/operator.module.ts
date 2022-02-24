import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatorRoutingModule } from './operator-routing.module';
import { OperatorDashboardComponent } from './operator-dashboard/operator-dashboard.component';

@NgModule({
  declarations: [OperatorDashboardComponent],
  imports: [
    CommonModule,
    OperatorRoutingModule
  ]
})
export class OperatorModule { }
