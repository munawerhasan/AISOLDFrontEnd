import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../../../../core/auth/auth.service';
import { SubjectService } from '../../services/subject.service';
import swal from 'sweetalert2';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-teacher-mapping',
  templateUrl: './teacher-mapping.component.html',
  styleUrls: ['./teacher-mapping.component.scss']
})
export class TeacherMappingComponent implements OnInit {

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';
  data: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private subjectService: SubjectService,
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.subjectService.getSubjectTeacherMappingListGeneric(this.authService.currentUserValue.schoolId, 0, 0, 0, 0, 0).subscribe(res => {
      this.data = res.data;
      this.spinner.hide();
    })
  }

}
