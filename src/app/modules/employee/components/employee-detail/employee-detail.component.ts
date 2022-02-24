import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { LocalStorageService } from '../../../../core/local-storage/local-storage.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  title = 'Please fill employee realted information.';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      
      firstName: ['Test', Validators.required],
      lastName: ['Test', Validators.required],
      middleName: [''],
      employeeCode: [null, Validators.required],
      masterEmployeeId: [null, Validators.required],
      masterDepartmentId: [null, Validators.required],
      joiningDate: [null],
      offerSalary: [null],
      qualification: [null],
      experience: [null],
      activeStatus: [null],
    });

  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    console.log(this.localStorageService.getUserId());

    this.form.addControl('schoolId', new FormControl(parseInt(this.authService.currentUserValue.schoolId.toString())));
    this.form.addControl('createdByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())));
    this.form.addControl('userId', new FormControl(this.localStorageService.getUserId()));

    console.log(JSON.stringify(this.form.value))

    this.employeeService.addEmployee(this.form.value)
      .pipe(first())
      .subscribe(
        res => {

          console.log(JSON.stringify(res))

          if (res.isError === false) {
            swal({
              title: 'Success!',
              text: 'Record successfully submitted!',
              type: 'success'
            }).catch(swal.noop);

            this.localStorageService.saveEmployeeDetail(JSON.stringify(res.data));

            this.router.navigateByUrl('/employee/details/personal-detail', { relativeTo: this.route.parent, skipLocationChange: true });

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

}
