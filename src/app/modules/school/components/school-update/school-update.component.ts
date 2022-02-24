import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { SchoolService } from '../../services/school.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { StateModel } from '../../../../models/state-model';
import { MasterService } from '../../../../shared/master-service/master.service';
import { SchoolModel } from '../../../../models/school-model';
import swal from 'sweetalert2';

@Component({
  selector: 'app-school-update',
  templateUrl: './school-update.component.html',
  styleUrls: ['./school-update.component.scss',]
})
export class SchoolUpdateComponent implements OnInit {

  schoolData = SchoolModel;
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

    let schoolId = this.route.snapshot.paramMap.get('schoolId');
    console.log(schoolId)
    this.fetchData(schoolId);

    this.masterService.States().subscribe((res: any) => {
      this.states = res.data;
    });

    this.form = this.formBuilder.group({
      schoolId: [0],
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
    });


  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.form.addControl('updatedByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())))

    console.log(JSON.stringify(this.form.value))

    this.loading = true;
    this.schoolService.updateSchool(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          swal({
            title: 'Success!',
            text: 'Record successfully updated!',
            type: 'success'
          }).catch(swal.noop);

          this.router.navigate(['/school/list']);
        },
        error => {
          this.loading = false;
          swal({
            title: 'Error!',
            text: 'Somthing went wrong!',
            type: 'warning'
          }).catch(swal.noop);
        });
  }

  fetchData(id:any) {

    this.schoolService.getSchoolById(id).subscribe((res: any) => {
      //res.data = res.data;
      this.form.setValue({
        schoolId:res.data['schoolId'],
        schoolName: res.data['schoolName'],
        schoolCode: res.data['schoolCode'],
        schoolEmail: res.data['schoolEmail'],
        registrationNumber: res.data['registrationNumber'],
        tagline: res.data['tagline'],
        stateId: res.data['stateId'],
        city: res.data['city'],
        address1: res.data['address1'],
        address2: res.data['address2'],
        description: res.data['description'],
      //countryId: ['Test', Validators.required],
      pinCode: res.data['pinCode'],

      ownerName: res.data['ownerName'],
      ownerContactNo:res.data['ownerContactNo'],
      ownerEmail: res.data['ownerEmail'],
      gender: res.data['gender'],
      dob: res.data['dob'],
      uidType: res.data['uidType'],
      uidNumber: res.data['uidNumber'],

      bankName: res.data['bankName'],
      ifscCode: res.data['ifscCode'],
      accountNo: res.data['accountNo'],
      bankAddress: res.data['bankAddress'],
      paymentLink: res.data['paymentLink'],
      additionalInfo: res.data['additionalInfo'],

      });

    });


    
  }


}