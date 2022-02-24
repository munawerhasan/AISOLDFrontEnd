import { NgModule } from '@angular/core';
import { DataTableModule } from 'angular2-datatable';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../../shared/shared.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { FeeRoutingModule } from './fee-routing.module';
import { PendingFeeComponent } from './components/pending-fee/pending-fee.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentStudentComponent } from './components/payment-student/payment-student.component';

@NgModule({
  declarations: [PendingFeeComponent, PaymentComponent, PaymentStudentComponent],
  imports: [
    CommonModule,
    FeeRoutingModule,
    SharedModule,
    HttpClientModule,
    DataTableModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ]
})
export class FeeModule { }
