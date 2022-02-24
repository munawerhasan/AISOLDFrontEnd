import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AssignmentService } from '../../services/assignment.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AssignmentModel } from '../../../../models/assignement-model';
import { AttachmentModel } from '../../../../models/attachment-model';
import { MasterService } from '../../../../shared/master-service/master.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-assignment-submit',
  templateUrl: './assignment-submit.component.html',
  styleUrls: ['./assignment-submit.component.scss']
})
export class AssignmentSubmitComponent implements OnInit {

  form: FormGroup;
  attachedFiles: string[] = [];
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentService,
    private authService: AuthService,
    private masterService: MasterService,
    private location: Location
  ) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('Id');

    this.form = this.formBuilder.group({
      assignmentId: [id],
      feedback: [''],
      assignmentStatus: [null, Validators.required],
      files: [null]
    });

    this.location.replaceState("/assignment/submit");
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    var formData: any = new FormData();
    formData.append("AssignmentId", this.form.get('assignmentId').value);
    formData.append("AssignmentStatus", this.form.get('assignmentStatus').value);
    formData.append("Feedback", this.form.get('feedback').value);
    formData.append("UserId", parseInt(this.authService.currentUserValue.id.toString()));
    formData.append("SchoolId", parseInt(this.authService.currentUserValue.schoolId.toString()));

    console.log(this.attachedFiles);
    for (var i = 0; i < this.attachedFiles.length; i++) {
      formData.append('Files', this.attachedFiles[i]);
    }

    this.loading = true;
    this.assignmentService.addUserAssignment(formData)
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
            this.form.reset();
            this.router.navigate(["/assignment/student"])
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

  uploadFiles(event) {
    for (var i = 0; i < event.target.files.length; i++) {
      this.attachedFiles.push(event.target.files[i]);
    }
  }

}
