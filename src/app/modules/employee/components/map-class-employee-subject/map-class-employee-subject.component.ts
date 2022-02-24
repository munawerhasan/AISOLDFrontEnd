import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { EmployeeService } from "../../services/employee.service";
import { AuthService } from '../../../../core/auth/auth.service';
import { MasterService } from '../../../../shared/master-service/master.service';
import swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-map-class-employee-subject',
  templateUrl: './map-class-employee-subject.component.html',
  styleUrls: ['./map-class-employee-subject.component.scss',
    '../../../../../assets/charts/radial/css/radial.scss',]
})
export class MapClassEmployeeSubjectComponent implements OnInit {

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  form: FormGroup;
  loading = false;
  submitted = false;
  employeeData: any;
  data: any;
  classData: any;
  sectionData: any;
  subjectData: any;
  masterClassId = 0;
  masterSectionId = 0;
  selectedUserId = 0;
  keyword = 'name';


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService,
    private masterService: MasterService,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({

      masterClassId: [null, Validators.required],
      masterSectionId: [null, Validators.required],
      masterSubjectId: [null, Validators.required],
      teacherUserId: [this.selectedUserId],
      schoolId: [this.authService.currentUserValue.schoolId],
      createdByUserId: [this.authService.currentUserValue.id]

    });

    this.spinner.show();
    this.employeeService.getEmployeeListGeneric(this.authService.currentUserValue.schoolId, 1, 0, 0).subscribe((res: any) => {
      this.employeeData = res.data;
      this.spinner.hide();
    });

  }

  onSelectEmployee(event) {
    this.selectedUserId = event.userId
    this.spinner.show();
    this.employeeService.getMasterClassListBySchoolIdAndStatus(this.authService.currentUserValue.schoolId, 1).subscribe(res => {
      this.classData = res.data;
      this.spinner.hide();
    })

    this.employeeService.getSubjectTeacherMappingListGeneric(this.authService.currentUserValue.schoolId, 0, this.selectedUserId, 0, 0, 0).subscribe(res => {
      this.data = res.data;
      this.spinner.hide();
    })

  }
  onSelectClass(event) {
    this.masterClassId = parseInt(event.target.value);
    this.spinner.show();
    this.employeeService.getMasterSectionListByMasterClass(this.authService.currentUserValue.schoolId, 1, this.masterClassId).subscribe(res => {
      this.sectionData = res.data;
      this.spinner.hide();
    })
  }
  onSelectSection(event) {
    this.masterSectionId = parseInt(event.target.value);
    this.spinner.show();
    this.employeeService.getMasterSubjectListByMasterClassAndSection(this.authService.currentUserValue.schoolId, 1, this.masterClassId, this.masterSectionId).subscribe(res => {
      this.subjectData = res.data;
      this.spinner.hide();
    })
  }

  onSubmit() {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    this.form.controls['masterClassId'].setValue(parseInt(this.form.get('masterClassId').value));
    this.form.controls['masterSectionId'].setValue(parseInt(this.form.get('masterSectionId').value));
    this.form.controls['masterSubjectId'].setValue(parseInt(this.form.get('masterSubjectId').value));
    this.form.controls['teacherUserId'].setValue(this.selectedUserId);
    this.form.controls['schoolId'].setValue(parseInt(this.form.get('schoolId').value));
    this.form.controls['createdByUserId'].setValue(parseInt(this.form.get('createdByUserId').value));
    this.loading = true;
    this.spinner.show();
    this.employeeService.addSubjectTeacherMapping(this.form.value)
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

            this.employeeService.getSubjectTeacherMappingListGeneric(this.authService.currentUserValue.schoolId, 0, this.selectedUserId, 0, 0, 0).subscribe(res => {
              this.data = res.data;
              this.spinner.hide();
            })

            this.resetForm();
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

  resetForm() {
    this.form.reset({
      'masterClassId': null,
      'masterSectionId': null,
      'masterSubjectId': null,
      'teacherUserId': this.selectedUserId,
      'userAssignmentStatus': null,
      'createdByUserId': parseInt(this.authService.currentUserValue.id.toString()),
      'schoolId': parseInt(this.authService.currentUserValue.schoolId.toString())
    });

  }

  deleteRecord(id) {
    this.spinner.show();
    console.log(id)
    this.employeeService.deleteSubjectTeacherMapping(id).subscribe(res => {
    })
    this.employeeService.getSubjectTeacherMappingListGeneric(this.authService.currentUserValue.schoolId, 0, this.selectedUserId, 0, 0, 0).subscribe(res => {
      this.data = res.data;
      this.spinner.hide();
    })
  }

}
