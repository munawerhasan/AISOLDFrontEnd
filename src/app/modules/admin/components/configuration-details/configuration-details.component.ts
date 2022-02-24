import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AdminService } from '../../services/admin.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { MasterService } from '../../../../shared/master-service/master.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-configuration-details',
  templateUrl: './configuration-details.component.html',
  styleUrls: ['./configuration-details.component.scss',
  '../../../../../assets/icon/icofont/css/icofont.scss']
})
export class ConfigurationDetailsComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  data: any;
  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private adminService: AdminService,
    private masterService: MasterService,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      configurationId:[0],
      notifictionType: [0, Validators.required],
      disableAppType: [0, Validators.required],
      feeAlertAmount: [0, Validators.required],
      feeAlertDate: [null],
      paymentUrl: [null],
    });

    this.updateRecord()
    this.adminService.getConfigurationBySchoolId(this.authService.currentUserValue.schoolId).subscribe((res: any) => {
      this.data = res.data;
    });

  }

  get f() { return this.form.controls; }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.form.addControl('createdByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())));
    this.form.addControl('schoolId', new FormControl(parseInt(this.authService.currentUserValue.schoolId.toString())));

    console.log(JSON.stringify(this.form.value))

    this.loading = true;
    this.adminService.addConfiguration(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          
          if(data.isError===false)
          {
            swal({
              title: 'Success!',
              text: 'Record successfully submitted!',
              type: 'success'
            }).catch(swal.noop);
          }
          else
          {
            swal({
              title: 'Error!',
              text: data.message,
              type: 'warning'
            }).catch(swal.noop);
          }
          this.adminService.getConfigurationBySchoolId(this.authService.currentUserValue.schoolId).subscribe((res: any) => {
            this.data = res.data;
          });
          
        },
        error => {
          this.loading = false;
          console.log(JSON.stringify(error))
          swal({
            title: 'Error!',
            text: error.message,
            type: 'warning'
          }).catch(swal.noop);
        });
  }
  updateRecord() {
    this.adminService.getConfigurationBySchoolId(this.authService.currentUserValue.schoolId).subscribe((res: any) => {
      this.form.setValue({
        configurationId:res.data['configurationId'],
        notifictionType:res.data['notifictionType'],
        disableAppType: res.data['disableAppType'],
        feeAlertAmount: res.data['feeAlertAmount'],
        feeAlertDate: res.data['feeAlertDate'],
        paymentUrl: res.data['paymentUrl'],
      });
    });
  }

}
