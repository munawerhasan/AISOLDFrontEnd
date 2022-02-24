import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectService } from '../../services/subject.service';
import { SubjectModel } from '../../../../models/subject-model';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {

  public data: SubjectModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(
    public subjectService: SubjectService, 
    private router: Router,
    private authService:AuthService  
  ) { }

  ngOnInit() {
    this.subjectService.getSubjectListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
      this.data = res.data;
    });

  }


}
