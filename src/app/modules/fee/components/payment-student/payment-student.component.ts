import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeeService } from "../../services/fee.service";
import { AuthService } from '../../../../core/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-payment-student',
  templateUrl: './payment-student.component.html',
  styleUrls: ['./payment-student.component.scss']
})
export class PaymentStudentComponent implements OnInit {
  public data: any;
  public pendingFeeData: any;
  loading = false;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  totalAmount = 0;
  totalDiscount = 0;
  totalNetAmount = 0;
  TotalPaidAmount = 0;
  TotalDueAmount = 0;
  TotalAdvance = 0;
  
  constructor(
    public feeService: FeeService,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.feeService.getPaymentListGeneric(this.authService.currentUserValue.schoolId, this.authService.currentUserValue.id).subscribe((res: any) => {
      this.data = res.data;
      this.spinner.hide();
      if (this.data) {
        this.totalAmount = this.data.reduce((sum, item) => sum + item.totalAmount, 0);
        this.totalDiscount = this.data.reduce((sum, item) => sum + item.discount, 0);
        this.totalNetAmount = this.data.reduce((sum, item) => sum + item.netAmount, 0);
        this.TotalPaidAmount = this.data.reduce((sum, item) => sum + item.paidAmount, 0);
        this.TotalDueAmount = this.data.reduce((sum, item) => sum + item.due, 0);
        this.TotalAdvance = this.data.reduce((sum, item) => sum + item.advance, 0);
      } 
      else {
        this.totalAmount=0;
        this.totalDiscount=0;
        this.totalNetAmount=0;
        this.TotalPaidAmount=0;
        this.TotalDueAmount=0;
        this.TotalAdvance=0;
      }
    });

    this.feeService.getPendingFeeByUserIdAPI(this.authService.currentUserValue.schoolId, this.authService.currentUserValue.id).subscribe((res: any) => {
      this.pendingFeeData = res.data;
      this.spinner.hide();
    });
  }

}
