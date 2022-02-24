import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { EmployeeService } from "../../services/employee.service";
import { AuthService } from '../../../../core/auth/auth.service';
import { MasterService } from '../../../../shared/master-service/master.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {
  form: FormGroup;
  loading = false;
  submitted = false;
  masterDepartment: any;
  masgterEmployee: any;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private masterService: MasterService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    let employeeId = this.route.snapshot.paramMap.get('id');
    console.log(employeeId)
    this.fetchData(employeeId);
    this.form = this.formBuilder.group({

      employeeId: [''],
      masterEmployeeId: [null, Validators.required],
      masterDepartmentId: [null, Validators.required],
      employeeCode: ['', Validators.required],
      email: [''],
      bioMatricId: [''],
      // userName: ['', Validators.required],
      // password: ['', Validators.required],
      title: [''],
      firstName: ['', Validators.required],
      middleName: [''],
      lastName: [''],
      joiningDate: [null, Validators.required],
      appointmentDate: [null, Validators.required],
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
      activeStatus:[0]
    });

    this.masterService.MasterEmployee().subscribe((data: any) => {
      this.masgterEmployee = data.data
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

    this.form.addControl('updatedByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())));
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
            this.router.navigate(['/employee/list']);
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
  
  fetchData(id: any) {
    this.employeeService.getEmployeeById(id).subscribe((res: any) => {
      console.log(res.data)
      this.form.setValue({
        employeeId: res.data['employeeId'],
        masterEmployeeId: res.data['masterEmployeeId'],
        masterDepartmentId: res.data['masterDepartmentId'],
        employeeCode: res.data['employeeCode'],
        email: res.data['email'],
        bioMatricId: res.data['bioMatricId'],
        title: res.data['title'],
        firstName: res.data['firstName'],
        middleName: res.data['middleName'],
        lastName: res.data['lastName'],
        joiningDate: res.data['joiningDate'],
        appointmentDate: res.data['appointmentDate'],
        board: res.data['board'],
        jobTitle: res.data['jobTitle'],
        employeeReferral: res.data['employeeReferral'],
        qualification: res.data['qualification'],
        experience: res.data['experience'],
        dob: res.data['dob'],
        gender: res.data['gender'],
        maritalStatus: res.data['maritalStatus'],
        anniversaryDate: res.data['anniversaryDate'],
        religion: res.data['religion'],
        castCategory: res.data['castCategory'],
        bloodGroup: res.data['bloodGroup'],
        handicapStatus: res.data['handicapStatus'],
        medicalCondition: res.data['medicalCondition'],
        uidType: res.data['uidType'],
        uidNumber: res.data['uidNumber'],
        countryId: res.data['countryId'],
        stateId: res.data['stateId'],
        city: res.data['city'],
        pinCode: res.data['pinCode'],
        address1: res.data['address1'],
        address2: res.data['address2'],
        phoneNumber: res.data['phoneNumber'],
        name: res.data['name'],
        account: res.data['account'],
        ifsc: res.data['ifsc'],
        pan: res.data['pan'],
        activeStatus: res.data['activeStatus'],
      });
    });
  }
}


