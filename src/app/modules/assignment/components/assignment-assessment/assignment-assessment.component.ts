import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AssignmentService } from '../../services/assignment.service';
import { AssignmentModel } from '../../../../models/assignement-model';
import { AuthService } from '../../../../core/auth/auth.service';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { environment,masterUserAssignmentStatus } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-assignment-assessment',
  templateUrl: './assignment-assessment.component.html',
  styleUrls: ['./assignment-assessment.component.scss',
  '../../../../../assets/icon/icofont/css/icofont.scss',
  '../../../../../../node_modules/ngx-bar-rating/themes/br-stars-theme.css',
  '../../../../../../node_modules/ng2-toasty/style-bootstrap.css',
  '../../../../../../node_modules/ng2-toasty/style-default.css',
  '../../../../../../node_modules/ng2-toasty/style-material.css']
})
export class AssignmentAssessmentComponent implements OnInit {

  public assignmentDetail: any;
  public rejectedAssignment: any;
  public needToDiscussAssignment: any;
  public assessedAndClosedAssignment: any;
  loading = false;
  form: FormGroup;
  submitted = false;
  baseURL = "";
  selectedUserId:any;
  assignmentId:any;

  constructor(
    public assignmentService: AssignmentService,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.spinner.show();

    let id = this.route.snapshot.paramMap.get('Id');
    this.assignmentId=parseInt(id);
    this.baseURL = environment.baseUrl;
    
    this.assignmentService.getAssignmentByIdAPI(this.assignmentId).subscribe((res: any) => {
      this.assignmentDetail = res.data;
      
    });

    this.assignmentService.getAssignmentAssessmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.Rejected, id, 0, 0, 0,0).subscribe((res: any) => {
      this.rejectedAssignment = res.data;
      this.spinner.hide();
    });

    this.assignmentService.getAssignmentAssessmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.TeacherNeedToDiscuss, id, 0, 0, 0,0).subscribe((res: any) => {
      this.needToDiscussAssignment = res.data;
      this.spinner.hide();
    });

    this.assignmentService.getAssignmentAssessmentListGenericAPI(this.authService.currentUserValue.schoolId, masterUserAssignmentStatus.AssessedAndClosed, id, 0, 0, 0,0).subscribe((res: any) => {
      this.assessedAndClosedAssignment = res.data;
      this.spinner.hide();
    });


  }

}
