import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FeeService } from "../../services/fee.service";
import { AuthService } from '../../../../core/auth/auth.service';
import { NgxSpinnerService } from "ngx-spinner";
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public data: any;
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
  totalCount=0;
  paymentByGroup: any;
  totalGroupByAmount = 0;

  constructor(
    public feeService: FeeService,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.feeService.getPaymentListGeneric(this.authService.currentUserValue.schoolId, 0).subscribe((res: any) => {
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
        this.totalAmount = 0;
        this.totalDiscount = 0;
        this.totalNetAmount = 0;
        this.TotalPaidAmount = 0;
        this.TotalDueAmount = 0;
        this.TotalAdvance = 0;
      }
    });
    this.spinner.show();
    this.feeService.getPaymentByGroup(this.authService.currentUserValue.schoolId).subscribe(res => {
      this.paymentByGroup = res.data;
      this.totalCount = this.paymentByGroup.paymentByDate.reduce((sum, item) => sum + item.count, 0);
      this.spinner.hide();
    })
  }

  exportToExcel() {

    let exportData: any;
    this.spinner.show();
    this.feeService.getPaymentListExport(this.authService.currentUserValue.schoolId).subscribe(res => {
      exportData = res.data;
      this.spinner.hide();

      if (exportData.length) {
        // options for csv export
        const options = {
          fieldSeparator: ',',
          quoteStrings: '"',
          decimalSeparator: '.',
          showLabels: false,
          showTitle: false,
          filename: 'PaymentCollection' + new Date().toDateString() + new Date().toLocaleTimeString(),
          useTextFile: false,
          useBom: true,
          useKeysAsHeaders: true
        };
        const csvExporter = new ExportToCsv(options);
        csvExporter.generateCsv(exportData);
      }
    })
    
  }

}
