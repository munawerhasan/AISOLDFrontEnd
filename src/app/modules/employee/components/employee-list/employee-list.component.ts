import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../../../models/employee-model';
import { AuthService } from '../../../../core/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public data: EmployeeModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public selectedUserId='';
  changePasswordForm: FormGroup;
  submitted = false;

  constructor
  (
    public employeeService: EmployeeService,
    private router: Router,
    private authService: AuthService, 
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
    ) { }

  ngOnInit() {

    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required]
    });

    this.spinner.show();
    this.employeeService.getEmployeeListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
      this.data = res.data;
      this.spinner.hide();
    });

  }


  deleteRecord(id: any) {
    this.loading = true;
    this.employeeService.deleteEmployeeById(id)
      .subscribe(res => {
          this.loading = false;
          this.router.navigate(['/employee/list']);
        }, (err) => {
          console.log(err);
          this.loading = false;
        }
      );
  }

  openMyModal(event) {
    this.selectedUserId=event;

    document.querySelector('#' + 'ResetPasswordModelId').classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
  }

  get f() { return this.changePasswordForm.controls; }

  changePassword() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.changePasswordForm.invalid) {
      return;
    }

    this.authService.changePassword(this.f.password.value, this.selectedUserId.toString())
      .pipe(first())
      .subscribe(
        data => {

          console.log(JSON.stringify(data));

          if (data.isError === false) {
            swal({
              title: 'Success!',
              text: 'Password has been Reset successfully!',
              type: 'success'
            }).catch(swal.noop);
            this.changePasswordForm.reset();
          }
          else {
            swal({
              title: 'Error!',
              text: data.message,
              type: 'warning'
            }).catch(swal.noop);
          }

        },
        error => {
          console.log(JSON.stringify(error))
          swal({
            title: 'Error!',
            text: error.message,
            type: 'warning'
          }).catch(swal.noop);
        });
  }

}
