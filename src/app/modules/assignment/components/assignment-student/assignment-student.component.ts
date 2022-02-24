import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AssignmentService } from '../../services/assignment.service';
import { AssignmentModel } from '../../../../models/assignement-model';
import { AuthService } from '../../../../core/auth/auth.service';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";
import {ToastData, ToastOptions, ToastyService} from 'ng2-toasty';  

@Component({
  selector: 'app-assignment-student',
  templateUrl: './assignment-student.component.html',
  styleUrls: ['./assignment-student.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss',
    '../../../../../../node_modules/ng2-toasty/style-bootstrap.css',
    '../../../../../../node_modules/ng2-toasty/style-default.css',
    '../../../../../../node_modules/ng2-toasty/style-material.css']
})
export class AssignmentStudentComponent implements OnInit {
  position = 'bottom-right';
  title: string;
  msg: string;
  showClose = true;
  theme = 'bootstrap';
  type = 'default';
  closeOther = false;

  public data: AssignmentModel[];
  loading = false;
  form: FormGroup;
  attachedFiles: string[] = [];
  submitted = false;
  selectedAssignement = 0;
  selectedUserAssignement = 0;
  baseURL = "";

  constructor(
    public assignmentService: AssignmentService,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService,
    private toastyService: ToastyService
  ) { }

  ngOnInit() {
    
    this.baseURL = environment.baseUrl;
    this.form = this.formBuilder.group({
      feedback: [''],
      assignmentStatus: [null, Validators.required],
      files: [null]
    });
    this.spinner.show();
    this.assignmentService.getAssignmentListByStudentAPI(this.authService.currentUserValue.id, this.authService.currentUserValue.schoolId, 0).subscribe((res: any) => {
      this.data = res.data;
      this.spinner.hide();
    });

  }

  submitAssignment(id) {
    this.router.navigate(["assignment/submit/" + id])
  }

  onSubmit() {

    //this.addToast({title:'Successfully Added', msg:'Your Assignment Successfully Submitted', timeout: 5000, theme:'default', position:'top-center', type:'success'})
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    var formData: any = new FormData();
    formData.append("userAssignmentId", this.selectedUserAssignement);
    formData.append("AssignmentId", this.selectedAssignement);
    formData.append("AssignmentStatus", this.form.get('assignmentStatus').value);
    formData.append("Feedback", this.form.get('feedback').value);
    formData.append("UserId", parseInt(this.authService.currentUserValue.id.toString()));
    formData.append("SchoolId", parseInt(this.authService.currentUserValue.schoolId.toString()));


    for (var i = 0; i < this.attachedFiles.length; i++) {
      formData.append('Files', this.attachedFiles[i]);
    }

    console.log(JSON.stringify(formData));
    this.loading = true;
    this.assignmentService.updateUserAssignment(formData)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;

          if (data.isError === false) {
            //this.addToast({title:'Successfully Added', msg:'Your Assignment Successfully Submitted', timeout: 5000, theme:'default', position:'top-center', type:'success'})
            this.form.reset();
            this.attachedFiles = null;
            this.reloadData();
          }
          else {
            //this.addToast({title:'Error', msg:data.message, timeout: 5000, theme:'default', position:'top-center', type:'error'})
          }

        },
        error => {
          this.loading = false;
          //this.addToast({title:'Error', msg:'Some Error Occured', timeout: 5000, theme:'default', position:'top-center', type:'error'})
        });
  }

  uploadFiles(event) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.attachedFiles.push(event.target.files[i]);
    }
  }

  openAssignmentModal(assignmentId, userAssignmentId) {
    this.selectedAssignement = assignmentId;
    this.selectedUserAssignement = userAssignmentId;
    console.log(this.selectedAssignement)
    document.querySelector('#' + 'AssignmentModel').classList.add('md-show');
  }

  closeMyModal(event) {
    ((event.target.parentElement.parentElement).parentElement).classList.remove('md-show');
    this.form.reset();
    this.attachedFiles = null;
  }

  reloadData() {
    this.spinner.show();
    this.assignmentService.getAssignmentListByStudentAPI(this.authService.currentUserValue.id, this.authService.currentUserValue.schoolId, 0).subscribe((res: any) => {
      this.data = res.data;
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
