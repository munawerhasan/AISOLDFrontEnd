import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchoolService } from '../../services/school.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { StateModel } from '../../../../models/state-model';
import { MasterService } from '../../../../shared/master-service/master.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-school-add',
  templateUrl: './school-add.component.html',
  styleUrls: ['./school-add.component.scss',],
})
export class SchoolAddComponent implements OnInit {

  states: StateModel[];
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private schoolService: SchoolService,
    private masterService: MasterService,
    private authService:AuthService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      schoolName: ['', Validators.required],
      schoolCode: ['', Validators.required],
      schoolEmail: [''],
      registrationNumber: [''],
      tagline: [''],
      description: [''],

      address1: ['', Validators.required],
      address2: [''],
      city: ['', Validators.required],
      stateId: ['',Validators.required],
      //countryId: ['Test', Validators.required],
      pinCode: [''],

      ownerName: ['', Validators.required],
      ownerContactNo: ['', Validators.required],
      ownerEmail: ['', Validators.required],
      gender: [0],
      dob: [null],
      uidType: [null],
      uidNumber: [''],

      bankName: [''],
      ifscCode: [''],
      accountNo: [''],
      bankAddress: [''],
      paymentLink: [''],
      additionalInfo: [''],
      
      // logo: ['Test'],
      // activeStatus: ['Test'],
      // createdByUserId: ['Test'],

      smsUserId:[''],
      password:[''],
      senderId:[''],
      apiKey:[''],
      formMailId:[''],
      userId:[''],
    });

    this.masterService.States().subscribe((data: any) => {
      this.states = data.data;
    });


  }
  get f() { return this.form.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.form.addControl('createdByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())))
    console.log(JSON.stringify(this.form.value))

    this.loading = true;
    this.schoolService.addSchool(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          console.log(JSON.stringify(data))
          swal({
            title: 'Success!',
            text: 'Record successfully submitted!',
            type: 'success'
          }).catch(swal.noop);
          this.router.navigate(["/school/list"]);
        },
        error => {
          this.loading = false;
          console.log(JSON.stringify(error))
          swal({
            title: 'Error!',
            text: 'Somthing went wrong!',
            type: 'warning'
          }).catch(swal.noop);
        });
  }

  schoolList(){
    this.router.navigate(['/school/list'])
  }

}
