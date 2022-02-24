import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SchoolService } from '../../services/school.service';
import { SchoolModel } from '../../../../models/school-model';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.scss',
  '../../../../../assets/icon/icofont/css/icofont.scss']
})
export class SchoolListComponent implements OnInit {

  public data: SchoolModel[];
  loading = false;
  showSuccess = false;
  showError = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public schoolService: SchoolService,private router: Router,) { }

  ngOnInit() {

    this.schoolService.getSchoolList().subscribe((res: any) => {
      this.data = res.data;
    });

  }

  addSchool(){
    this.router.navigate(['/school/add'])
  }


  deleteRecord(id: any) {
    this.loading = true;
    this.schoolService.deleteSchoolById(id)
      .subscribe(res => {
          this.loading = false;
          this.showSuccess=true;
          this.router.navigate(['/school/list']);
        }, (err) => {
          console.log(err);
          this.loading = false;
          this.showError=true;
        }
      );
  }

}
