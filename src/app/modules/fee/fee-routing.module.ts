import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PendingFeeComponent } from './components/pending-fee/pending-fee.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentStudentComponent } from './components/payment-student/payment-student.component';

const routes: Routes = [
  {
    path: 'payment',
    component: PaymentComponent,
    data: {
      title: 'Payment',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: false
    }
  },
  {
    path: 'pending-fee',
    component: PendingFeeComponent,
    data: {
      title: 'Pending Fee',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: false
    }
  },
  {
    path: 'payment-student',
    component: PaymentStudentComponent,
    data: {
      title: 'Pending Fee',
      icon: 'icon-layout-sidebar-left',
      caption: 'lorem ipsum dolor sit amet, consectetur adipisicing elit - sample page',
      status: false
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeeRoutingModule { }
