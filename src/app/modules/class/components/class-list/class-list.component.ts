import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClassService } from '../../services/class.service';
import { ClassModel } from '../../../../models/class-model';
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.scss']
})
export class ClassListComponent implements OnInit {

  public data: ClassModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(
    public classService: ClassService, 
    private router: Router,
    private authService:AuthService 
    ) { }

  ngOnInit() {
    this.classService.getClassListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
      this.data = res.data;
    });

  }

  deleteRecord(id: any) {
    this.loading = true;
    this.classService.deleteClassById(id)
      .subscribe(res => {
        this.loading = false;
        this.router.navigate(['/class/list']);
      }, (err) => {
        console.log(err);
        this.loading = false;
      }
      );
  }

}
