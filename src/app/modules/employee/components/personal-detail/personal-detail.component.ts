import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl,AbstractControl} from '@angular/forms';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { LocalStorageService } from '../../../../core/local-storage/local-storage.service';

@Component({
  selector: 'app-personal-detail',
  templateUrl: './personal-detail.component.html',
  styleUrls: ['./personal-detail.component.scss']
})
export class PersonalDetailComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  title = 'Please fill personal information.';

  constructor(
    private formBuilder: FormBuilder, 
    private authService:AuthService, 
    private employeeService:EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService:LocalStorageService
    ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({

      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      email: [''],
      dob: [null],
      gender: [null, Validators.required],
      maritalStatus: [null],
      anniversaryDate: [null],
      religion: [null, Validators.required],
      castCategory: [null],
      nationality: [null],
      bloodGroup: [null],
      handicapStatus: [null],
      medicalCondition: [''],
      uidType: [null],
      uidNumber: [''],
      countryId: [null],
      stateId: [null, Validators.required],
      city: ['', Validators.required],
      pinCode: ['', Validators.required],
      address1: ['', Validators.required],
      address2: [''],
      phoneNumber: [''],
      activeStatus: [null],
    });

  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.form.addControl('createdByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())))

    console.log(JSON.stringify(this.form.value))

    this.employeeService.addPersonalDetail(this.form.value)
      .pipe(first())
      .subscribe(
        res => {

           if(res.isError===false)
           {
            swal({
              title: 'Success!',
              text: 'Record successfully submitted!',
              type: 'success'
            }).catch(swal.noop);

            this.localStorageService.savePersonalDetail(JSON.stringify(res.data));

            this.router.navigateByUrl('/employee/details/final', { relativeTo: this.route.parent, skipLocationChange: true });

           }
           else
           {
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
            text: 'Somthing went wrong!',
            type: 'warning'
          }).catch(swal.noop);
        });
  }


}
