import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AssignmentService } from '../../services/assignment.service';
import { AssignmentModel } from '../../../../models/assignement-model';
import { AuthService } from '../../../../core/auth/auth.service';
import { MasterService } from "../../../../shared/master-service/master.service";
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-assignment-teacher',
  templateUrl: './assignment-teacher.component.html',
  styleUrls: ['./assignment-teacher.component.scss']
})
export class AssignmentTeacherComponent implements OnInit {

  public data: AssignmentModel[];
  loading = false;
  masterClasses: any;
  masterSections: any;
  masterSubject: any;
  filterPermission = false;
  classId = 0;
  sectionId = 0;
  subjectId = 0;
  status = 0;
  baseURL = "";

  constructor(
    public assignmentService: AssignmentService,
    private router: Router,
    private authService: AuthService,
    private masterService: MasterService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.spinner.show();

    this.baseURL = environment.baseUrl;

    if (this.authService.currentUserValue.role.toString() == "Admin" || this.authService.currentUserValue.role.toString() == "Owner") {
      this.filterPermission = true;

      this.assignmentService.getAssignmentListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId, 0).subscribe((res: any) => {
        this.data = res.data;
        this.spinner.hide();
      });

      this.masterService.MasterClass().subscribe((data: any) => {
        this.masterClasses = data.data;
      });
      this.masterService.MasterSection().subscribe((data: any) => {
        this.masterSections = data.data;
      });
      this.masterService.MasterSubject().subscribe((data: any) => {
        this.masterSubject = data.data;
      });
    }
    else {
      this.assignmentService.getAssignmentListByPublisherAPI(this.authService.currentUserValue.id, this.authService.currentUserValue.schoolId, 0).subscribe((res: any) => {
        this.data = res.data;
        this.spinner.hide();
      });
    }

    

  }

  gotoUserAssignmentActivity(id) {
    this.router.navigate(["assignment/user-assignment-activity/" + id])
  }
  gotoAssessment(id){
    this.router.navigate(["assignment/assessment/" + id])
  }

  onSelectClass(event) {
    this.classId = event.target.value;
    this.loadFilteredAssignment()
  }

  onSelectSection(event) {
    this.sectionId = event.target.value;
    this.loadFilteredAssignment()
  }

  onSelectSubject(event) {
    this.subjectId = event.target.value;
    this.loadFilteredAssignment()
  }

  onSelectStatus(event) {
    this.status = event.target.value;
    console.log(event.target.value)
    this.loadFilteredAssignment()
  }

  loadFilteredAssignment() {
    this.assignmentService.getAssignmentListByClassSectionSubjectStatusAPI(this.authService.currentUserValue.schoolId, this.status, this.classId, this.sectionId, this.subjectId).subscribe(res => {
      this.data = res.data;
    })
  }

  addAssignement() {
    this.router.navigate(["/assignment/add"])
  }

}
