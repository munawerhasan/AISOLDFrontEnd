import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { EmployeeService } from "../../services/employee.service";
import { AuthService } from '../../../../core/auth/auth.service';
import { MasterService } from '../../../../shared/master-service/master.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;
  masterDepartment: any;
  masterEmployee: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private masterService: MasterService,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({

      masterEmployeeId: [null, Validators.required],
      masterDepartmentId: [null, Validators.required],
      employeeCode: ['',Validators.required],
      email: [''],
      bioMatricId:[''],
      title:[''],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      joiningDate: [null, Validators.required],
      appointmentDate:[null, Validators.required],
      board: ['', Validators.required],
      jobTitle: ['', Validators.required],
      employeeReferral: [''],
      qualification: ['', Validators.required],
      experience: [0, Validators.required],
      dob: [null, Validators.required],
      gender: [null, Validators.required],
      maritalStatus: [0, Validators.required],
      anniversaryDate: [null],
      religion: [0, Validators.required],
      castCategory: [0],
      bloodGroup: [0],
      handicapStatus: [0],
      medicalCondition: [''],
      uidType: [0],
      uidNumber: [''],
      countryId: [null, Validators.required],
      stateId: [null, Validators.required],
      city: [''],
      pinCode: [''],
      address1: [''],
      address2: [''],
      phoneNumber: [''],
      name: [''],
      account: [''],
      ifsc: [''],
      pan: [''],

    });

    this.masterService.MasterEmployee().subscribe((data: any) => {
      this.masterEmployee = data.data
    })

    this.masterService.MasterDepartment().subscribe((data: any) => {
      this.masterDepartment = data.data
    })

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
    this.employeeService.addEmployee(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;

          if (data.isError === false) {
            swal({
              title: 'Success!',
              text: 'Record successfully submitted!',
              type: 'success'
            }).catch(swal.noop);
            this.router.navigate(['/employee/list'])
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
          this.loading = false;
          console.log(JSON.stringify(error))
          swal({
            title: 'Error!',
            text: error.message,
            type: 'warning'
          }).catch(swal.noop);
        });
  }

  employeeList() {
    this.router.navigate(['/employee/list'])
  }

}
