import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../../services/student.service';
import { StudentModel } from '../../../../models/student-model';
import { AuthService } from '../../../../core/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import swal from 'sweetalert2';
import { MasterService } from "../../../../shared/master-service/master.service";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class StudentListComponent implements OnInit {
  public data: StudentModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  public selectedUserId = '';
  changePasswordForm: FormGroup;
  submitted = false;
  studentDetail: any;
  masterClasses: any;
  masterSections: any;
  masterClassId=0;
  masterSectionId=0;
  totalCount=0;

  constructor
    (
      public StudentService: StudentService,
      private router: Router,
      private studentService: StudentService,
      private authService: AuthService,
      private formBuilder: FormBuilder,
      private masterService: MasterService,
      private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.changePasswordForm = this.formBuilder.group({
      password: ['', Validators.required]
    });

    this.spinner.show();
    this.studentService.getStudentListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId, 1).subscribe((res: any) => {
      this.data = res.data;
      this.spinner.hide();
    });

    this.masterService.MasterClass().subscribe((data: any) => {
      this.masterClasses = data.data;
    });
    this.masterService.MasterSection().subscribe((data: any) => {
      this.masterSections = data.data;
    });

  }


  deleteRecord(id: any) {
    this.loading = true;
    this.studentService.deleteStudentById(id)
      .subscribe(res => {
        this.loading = false;
        this.router.navigate(['/Student/list']);
      }, (err) => {
        console.log(err);
        this.loading = false;
      }
      );
  }

  openMyModal(event) {
    this.selectedUserId = event;

    document.querySelector('#' + 'ResetPasswordModelId').classList.add('md-show');
  }

  openStudentDetailModal(event) {
    this.selectedUserId = event;

    this.studentService.getStudentByUserId(this.selectedUserId).subscribe(res => {
      this.studentDetail = res.data;
    })
    document.querySelector('#' + 'ViewStudentModelId').classList.add('md-show');
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

  onSelectClass(event) {
    this.masterClassId=event.target.value;
    this.studentService.getStudentListByMasterClassAndMasterSectionAPI(this.masterClassId,this.masterSectionId,this.authService.currentUserValue.schoolId).subscribe(res=>{
      this.data=res.data;
     // this.totalCount=res.data?.length;
    })
  }
  onSelectSection(event) {
    this.masterSectionId=event.target.value;
    this.studentService.getStudentListByMasterClassAndMasterSectionAPI(this.masterClassId,this.masterSectionId,this.authService.currentUserValue.schoolId).subscribe(res=>{
      this.data=res.data;
      //this.totalCount=res.data?.length;
    })
  }

}
