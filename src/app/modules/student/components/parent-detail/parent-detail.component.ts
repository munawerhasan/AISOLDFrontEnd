import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl,AbstractControl} from '@angular/forms';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { LocalStorageService } from '../../../../core/local-storage/local-storage.service';

@Component({
  selector: 'app-parent-detail',
  templateUrl: './parent-detail.component.html',
  styleUrls: ['./parent-detail.component.scss']
})
export class ParentDetailComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  title = 'Please fill parent realted information.';

  constructor(
    private formBuilder: FormBuilder, 
    private authService:AuthService, 
    private studentService:StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService:LocalStorageService
    ) { }


  ngOnInit() {

    this.form = this.formBuilder.group({

      fatherFullName: ['', Validators.required],
      motherFullName: ['', Validators.required],
      fatherEmail: [''],
      motherEmail: [''],
      fatherContactNumber: ['', Validators.required],
      motherContactNumber: ['', Validators.required],
      fatherDOB: [null],
      motherDOB: [null],
      fatherEducation: [null],
      motherEducation: [null],
      fatherOccupation: [null],
      motherOccupation: [null],
      religion: [null],
      nationality: [null],
      fatherAadharNumber: [''],
      motherAadharNumber: [''],
      fatherPAN: [''],
      motherPAN: [''],
      isGuardianParentSame: [null],
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

    this.studentService.addParentDetail(this.form.value)
      .pipe(first())
      .subscribe(
        res => {

          console.log(JSON.stringify(res))

           if(res.isError===false)
           {
            swal({
              title: 'Success!',
              text: 'Record successfully submitted!',
              type: 'success'
            }).catch(swal.noop);

            this.localStorageService.saveParentDetail(JSON.stringify(res.data));

            this.router.navigateByUrl('/student/details/final', { relativeTo: this.route.parent, skipLocationChange: true });

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
