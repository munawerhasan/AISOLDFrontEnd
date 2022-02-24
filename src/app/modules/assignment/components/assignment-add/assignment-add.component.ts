import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AssignmentService } from '../../services/assignment.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { AssignmentModel } from '../../../../models/assignement-model';
import { AttachmentModel } from '../../../../models/attachment-model';
import { MasterService } from '../../../../shared/master-service/master.service';
import swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-assignment-add',
  templateUrl: './assignment-add.component.html',
  styleUrls: ['./assignment-add.component.scss']
})
export class AssignmentAddComponent implements OnInit {

  classes: any;
  sections: any;
  subjects: any;
  form: FormGroup;
  attachedFiles: string[] = [];
  loading = false;
  submitted = false;
  classData: any;
  sectionData: any;
  subjectData: any;
  masterClassId = 0;
  masterSectionId = 0;
  teacherUserId = 0;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private assignmentService: AssignmentService,
    private authService: AuthService,
    private masterService: MasterService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      Name: ['', Validators.required],
      ToBeSubmittedDate: [null, Validators.required],
      AssignmentType: [null, Validators.required],
      ClassId: [null, Validators.required],
      SectionId: [null, Validators.required],
      SubjectId: [null, Validators.required],
      Remark: [''],
      Description: [''],
      Files: [null]
    });

    if (this.authService.currentUserValue.role.toString() == "Admin") {
      this.teacherUserId = 0;
    }
    else if (this.authService.currentUserValue.role.toString() == "Teacher") {
      this.teacherUserId = this.authService.currentUserValue.id;
    }

    this.spinner.show();
    this.assignmentService.getMasterClassListByTeacher(this.authService.currentUserValue.schoolId, 1, this.teacherUserId).subscribe(res => {
      this.classData = res.data;
      this.spinner.hide();
    })
    // this.masterService.MasterClass().subscribe((data: any) => {
    //   this.classes = data.data;
    // });
    // this.masterService.MasterSection().subscribe((data: any) => {
    //   this.sections = data.data;
    // });
    // this.masterService.MasterSubject().subscribe((data: any) => {
    //   this.subjects = data.data;
    // });


  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    var formData: any = new FormData();
    formData.append("Name", this.form.get('Name').value);
    formData.append("ToBeSubmittedDate", this.form.get('ToBeSubmittedDate').value);
    formData.append("AssignmentType", this.form.get('AssignmentType').value);
    formData.append("ClassId", this.form.get('ClassId').value);
    formData.append("SectionId", this.form.get('SectionId').value);
    formData.append("SubjectId", this.form.get('SubjectId').value);
    formData.append("Remark", this.form.get('Remark').value);
    formData.append("Description", this.form.get('Description').value);
    formData.append("CreatedByUserId", parseInt(this.authService.currentUserValue.id.toString()));
    formData.append("PublishByUserId", parseInt(this.authService.currentUserValue.id.toString()));
    formData.append("SchoolId", parseInt(this.authService.currentUserValue.schoolId.toString()));

    console.log(this.attachedFiles);
    for (var i = 0; i < this.attachedFiles.length; i++) {
      formData.append('Files', this.attachedFiles[i]);
    }

    this.loading = true;
    this.assignmentService.addAssignment(formData)
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
            this.router.navigate(["/assignment/teacher"])
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

  viewAssignment() {
    this.router.navigate(["/assignment/teacher"])
  }

  onSelectClass(event) {
    if (this.authService.currentUserValue.role.toString() == "Admin") {
      this.teacherUserId = 0;
    }
    else if (this.authService.currentUserValue.role.toString() == "Teacher") {
      this.teacherUserId = this.authService.currentUserValue.id;
    }
    this.masterClassId = parseInt(event.target.value);
    this.spinner.show();
    this.assignmentService.getSubjectTeacherMappingListGeneric(this.authService.currentUserValue.schoolId, 1, this.teacherUserId, this.masterClassId, 0, 0).subscribe(res => {
      this.sectionData = res.data;
      this.spinner.hide();
    })

  }
  onSelectSection(event) {
    if (this.authService.currentUserValue.role.toString() == "Admin") {
      this.teacherUserId = 0;
    }
    else if (this.authService.currentUserValue.role.toString() == "Teacher") {
      this.teacherUserId = this.authService.currentUserValue.id;
    }
    this.masterSectionId = parseInt(event.target.value);
    this.spinner.show();
    this.assignmentService.getSubjectTeacherMappingListGeneric(this.authService.currentUserValue.schoolId, 1, this.teacherUserId, this.masterClassId, this.masterSectionId, 0).subscribe(res => {
      this.subjectData = res.data;
      this.spinner.hide();
    })
  }

}
