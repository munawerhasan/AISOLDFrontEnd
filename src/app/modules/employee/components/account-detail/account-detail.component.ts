import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { LocalStorageService } from '../../../../core/local-storage/local-storage.service';
import { AccountDetailModel } from '../../../../models/account-detail-model';


@Component({
  selector: 'app-account-detail',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})
export class AccountDetailComponent implements OnInit {

  form: FormGroup;
  accountDetailModel: AccountDetailModel=new AccountDetailModel();
  submitted = false;
  title = 'Please fill account realted information.';


  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {

    this.localStorageService.removeAllLocalStorage();

    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: [null, [Validators.required, Validators.min(8)]],
      confirmPassword: [null, [Validators.required, Validators.min(8)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      role: [null, Validators.required],
    });

  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.form.addControl('schoolId', new FormControl(parseInt(this.authService.currentUserValue.schoolId.toString())));
    this.form.addControl('createdByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())));

    
    console.log(this.form.value)
    this.employeeService.addAccount(this.form.value)
      .pipe(first())
      .subscribe(
        res => {

          if (res.isError === false) {
            swal({
              title: 'Success!',
              text: 'Record successfully submitted!',
              type: 'success'
            }).catch(swal.noop);

            this.localStorageService.saveAccountDetail(JSON.stringify(res.data))

            this.router.navigateByUrl('/employee/details/employee-detail', { relativeTo: this.route.parent, skipLocationChange: true });

          }
          else {
            swal({
              title: 'Error!',
              text: res.message,
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



  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get('password').value !== c.get('confirmPassword').value) {
      return { invalid: true };
    }
  }

}
