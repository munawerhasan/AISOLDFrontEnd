import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl,AbstractControl} from '@angular/forms';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { LocalStorageService } from '../../../../core/local-storage/local-storage.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.scss']
})
export class StudentDetailComponent implements OnInit {

  form: FormGroup;
  submitted = false;
  title = 'Please fill student realted information.';

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
      admissionNumber: ['Test', Validators.required],
      formNumber: [''],
      samagraNumber: [''],
      childNumber: [''],
      rollNumber: [0],
      firstName: ['Test', Validators.required],
      lastName: ['Test', Validators.required],
      middleName: [''],
      joiningDate: [null],
      sibling: [null],
      scholerType: [null],
      promotionStatus: [null],
      workFlowStatus: [null],
      referBy: [null],
      counselByUserId: [null],
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

    this.studentService.addStudent(this.form.value)
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

            this.localStorageService.saveStudentDetail(JSON.stringify(res.data));

            this.router.navigateByUrl('/student/details/personal-detail', { relativeTo: this.route.parent, skipLocationChange: true });

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
            text: error.message,
            type: 'warning'
          }).catch(swal.noop);
        });
  }

}
