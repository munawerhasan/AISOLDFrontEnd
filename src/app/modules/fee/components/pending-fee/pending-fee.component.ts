import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FeeService } from "../../services/fee.service";
import { AuthService } from '../../../../core/auth/auth.service';
import { MasterService } from "../../../../shared/master-service/master.service";
import { NgxSpinnerService } from "ngx-spinner";
import { NgbCalendar, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'app-pending-fee',
  templateUrl: './pending-fee.component.html',
  styleUrls: ['./pending-fee.component.scss']
})
export class PendingFeeComponent implements OnInit {
  public dueDropDownData: any;
  public data: any;
  masterClasses: any;
  masterSections: any;
  masterClassId = 0;
  masterSectionId = 0;
  minDue = 0;
  maxDue = 0;
  totalCount = 0;
  loading = false;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  sumOfDue = 0;
  pendingFeeByGroup:any;
  totalGroupByAmount = 0;
  exportToExcelData:any;
  //now = Date.now();
  //pipe = new DatePipe('en-US');
  // fromDate = this.pipe.transform(this.now, 'yyyy/MM/dd');
  // toDate = this.pipe.transform(this.now, 'yyyy/MM/dd');
  // fromDate = '';
  // toDate = '';

  constructor(
    public feeService: FeeService,
    private router: Router,
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private masterService: MasterService
  ) { }

  ngOnInit() {
    this.spinner.show();
    this.feeService.getPendingFeeListGeneric(this.authService.currentUserValue.schoolId, this.masterClassId, this.masterSectionId, this.minDue, this.maxDue).subscribe((res: any) => {
      this.data = res.data;
      if (this.data) {
        this.sumOfDue = this.data.reduce((sum, item) => sum + item.totalDue, 0);
        this.totalGroupByAmount=this.sumOfDue
      }
      else {
        this.sumOfDue = 0;
      }
      this.spinner.hide();
    });

    this.spinner.show();
    this.feeService.getPendingFeeByGroup(this.authService.currentUserValue.schoolId).subscribe(res=>{
      this.pendingFeeByGroup=res.data;
      this.spinner.hide();
    })

    this.feeService.getPendingFeeDropDown(this.authService.currentUserValue.schoolId).subscribe((res: any) => {
      this.dueDropDownData = res.data;
    });

    this.masterService.MasterClass().subscribe((data: any) => {
      this.masterClasses = data.data;
    });
    this.masterService.MasterSection().subscribe((data: any) => {
      this.masterSections = data.data;
    });
  }

  onSelectClass(event) {
    this.masterClassId = event.target.value;
    this.spinner.show();
    this.feeService.getPendingFeeListGeneric(this.authService.currentUserValue.schoolId, this.masterClassId, this.masterSectionId, this.minDue, this.maxDue).subscribe((res: any) => {
      this.data = res.data;
      if (this.data) {
        this.sumOfDue = this.data.reduce((sum, item) => sum + item.totalDue, 0);
      }
      this.spinner.hide();
    });
  }
  onSelectSection(event) {
    this.masterSectionId = event.target.value;
    this.spinner.show();
    this.feeService.getPendingFeeListGeneric(this.authService.currentUserValue.schoolId, this.masterClassId, this.masterSectionId, this.minDue, this.maxDue).subscribe((res: any) => {
      this.data = res.data;
      if (this.data) {
        this.sumOfDue = this.data.reduce((sum, item) => sum + item.totalDue, 0);
      }
      else {
        this.sumOfDue = 0;
      }
      this.spinner.hide();
    });
  }
  onSelectMinDue(event) {
    this.minDue = event.target.value;
    console.log(this.minDue)
    this.spinner.show();
    this.feeService.getPendingFeeListGeneric(this.authService.currentUserValue.schoolId, this.masterClassId, this.masterSectionId, this.minDue, this.maxDue).subscribe((res: any) => {
      this.data = res.data;
      if (this.data) {
        this.sumOfDue = this.data.reduce((sum, item) => sum + item.totalDue, 0);
      }
      else {
        this.sumOfDue = 0;
      }
      this.spinner.hide();
    });
  }
  onSelectMaxDue(event) {
    this.maxDue = event.target.value;
    this.spinner.show();
    this.feeService.getPendingFeeListGeneric(this.authService.currentUserValue.schoolId, this.masterClassId, this.masterSectionId, this.minDue, this.maxDue).subscribe((res: any) => {
      this.data = res.data;
      if (this.data) {
        this.sumOfDue = this.data.reduce((sum, item) => sum + item.totalDue, 0);
      }
      else {
        this.sumOfDue = 0;
      }
      this.spinner.hide();
    });
  }

  exportToExcel() {

    let exportData: any;
    this.spinner.show();
    this.feeService.getPendingFeeListExport(this.authService.currentUserValue.schoolId).subscribe(res => {
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
          filename: 'PendingFee' + new Date().toDateString() + new Date().toLocaleTimeString(),
          useTextFile: false,
          useBom: true,
          useKeysAsHeaders: true
        };
        const csvExporter = new ExportToCsv(options);
        csvExporter.generateCsv(exportData);
      }
    })
    
  }
  // onSelectFromDate(newDate:Date) {
  //   //this.fromDate = this.pipe.transform(newDate, 'yyyy/MM/dd');
  //   const date =
  //   newDate.getFullYear() +
  //   "-" +
  //   ("00" + (newDate.getMonth() + 1)).slice(-2) +
  //   "-" +
  //   ("00" + newDate.getDate()).slice(-2);
  //   console.log(date);
  // }
  // onSelectToDate(newDate: Date) {
  //   console.log(newDate);
  // }

}
