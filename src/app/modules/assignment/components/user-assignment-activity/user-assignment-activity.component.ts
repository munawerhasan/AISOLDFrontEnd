import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AssignmentService } from '../../services/assignment.service';
import { AssignmentModel } from '../../../../models/assignement-model';
import { AuthService } from '../../../../core/auth/auth.service';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { environment, masterUserAssignmentStatus } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import { ToastData, ToastOptions, ToastyService } from 'ng2-toasty';

@Component({
  selector: 'app-user-assignment-activity',
  templateUrl: './user-assignment-activity.component.html',
  styleUrls: ['./user-assignment-activity.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss',
    '../../../../../../node_modules/ngx-bar-rating/themes/br-stars-theme.css',
    '../../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../../../node_modules/ng2-toasty/style-material.css']
})
export class UserAssignmentActivityComponent implements OnInit {

  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  public assignmentDetail: any;
  public notSeenAssignment: any;
  public seenAssignment: any;
  public submittedAssignment: any;
  public reSubmittedAssignment: any;
  public completedAssignment: any;
  loading = false;
  form: FormGroup;
  submitted = false;
  baseURL = "";
  selectedUserId: any;
  assignmentId: any;
  public rateStar = 5;

  constructor(
    public assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('Id');
    this.assignmentId = parseInt(id);
    this.baseURL = environment.baseUrl;

    this.form = this.formBuilder.group({
      rating: [0, Validators.required],
      mark: [0],
      remark: [''],
      feedback: [''],
      userAssignmentStatus: [null, Validators.required],
      createdByUserId: [parseInt(this.authService.currentUserValue.id.toString())],
      schoolId: [parseInt(this.authService.currentUserValue.schoolId.toString())],
      userId: [parseInt(this.selectedUserId)],
      assignmentId: [this.assignmentId]
    });

    //this.spinner.show();

    this.assignmentService.getAssignmentByIdAPI(this.assignmentId).subscribe((res: any) => {
      this.assignmentDetail = res.data;
    });

    this.assignmentService.getUserAssignmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.NotSeen, id, 0, 0, 0).subscribe((res: any) => {
      this.notSeenAssignment = res.data;
    });

    this.assignmentService.getUserAssignmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.Seen, id, 0, 0, 0).subscribe((res: any) => {
      this.seenAssignment = res.data;
    });

    this.assignmentService.getUserAssignmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.Submitted, id, 0, 0, 0).subscribe((res: any) => {
      this.submittedAssignment = res.data;
    });

    this.assignmentService.getUserAssignmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.ReSubmitted, id, 0, 0, 0).subscribe((res: any) => {
      this.reSubmittedAssignment = res.data;
    });

    this.assignmentService.getUserAssignmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.AssessedAndClosed, id, 0, 0, 0).subscribe((res: any) => {
      this.completedAssignment = res.data;
    });

    this.spinner.hide();
  }

  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;

    //this.addToast({title:'Success Toasty', msg:'Turning standard Success alerts into awesome notifications', timeout: 5000, theme:'default', position:'top-center', type:'success'})
    this.form.controls['userId'].setValue(this.selectedUserId);

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value)

    this.assignmentService.addAssignmentAssessmentAPI(this.form.value)
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
            this.resetForm();
            this.reloadData();
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


  openAssignmentModal(event) {
    this.selectedUserId = event;
    document.querySelector('#' + 'AssessmentModel').classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    this.resetForm();
  }

  resetForm() {
    this.form.reset({
      'rating': 0,
      'mark': 0,
      'remark': '',
      'feedback': '',
      'userAssignmentStatus': null,
      'createdByUserId': parseInt(this.authService.currentUserValue.id.toString()),
      'schoolId': parseInt(this.authService.currentUserValue.schoolId.toString()),
      'userId': parseInt(this.selectedUserId),
      'assignmentId': this.assignmentId
    });

  }

  reloadData() {
    this.spinner.show();

    this.assignmentService.getAssignmentByIdAPI(this.assignmentId).subscribe((res: any) => {
      this.assignmentDetail = res.data;
    });

    this.assignmentService.getUserAssignmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.NotSeen, this.assignmentId, 0, 0, 0).subscribe((res: any) => {
      this.notSeenAssignment = res.data;
      this.spinner.hide();
    });

    this.assignmentService.getUserAssignmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.Seen, this.assignmentId, 0, 0, 0).subscribe((res: any) => {
      this.seenAssignment = res.data;
      this.spinner.hide();
    });

    this.assignmentService.getUserAssignmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.Submitted, this.assignmentId, 0, 0, 0).subscribe((res: any) => {
      this.submittedAssignment = res.data;
      this.spinner.hide();
    });

    this.assignmentService.getUserAssignmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.ReSubmitted, this.assignmentId, 0, 0, 0).subscribe((res: any) => {
      this.reSubmittedAssignment = res.data;
      this.spinner.hide();
    });

    this.assignmentService.getUserAssignmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.AssessedAndClosed, this.assignmentId, 0, 0, 0).subscribe((res: any) => {
      this.completedAssignment = res.data;
      this.spinner.hide();
    });

  }

  addToast(options) {
    if (options.closeOther) {
      this.toastyService.clearAll();
    }
    this.position = options.position ? options.position : this.position;
    const toastOptions: ToastOptions = {
      title: options.title,
      msg: options.msg,
      showClose: options.showClose,
      timeout: options.timeout,
      theme: options.theme,
      onAdd: (toast: ToastData) => {
        /* added */
      },
      onRemove: (toast: ToastData) => {
        /* removed */
      }
    };

    switch (options.type) {
      case 'default': this.toastyService.default(toastOptions); break;
      case 'info': this.toastyService.info(toastOptions); break;
      case 'success': this.toastyService.success(toastOptions); break;
      case 'wait': this.toastyService.wait(toastOptions); break;
      case 'error': this.toastyService.error(toastOptions); break;
      case 'warning': this.toastyService.warning(toastOptions); break;
    }
  }

}
