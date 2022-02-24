import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterDepartmentService } from '../../services/masterdepartment.service';
import { MasterDepartmentModel } from '../../../../../models/master-department-model';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-masterdepartment-list',
  templateUrl: './masterdepartment-list.component.html',
  styleUrls: ['./masterdepartment-list.component.scss']
})

 
export class MasterdepartmentListComponent implements OnInit {


  public data: MasterDepartmentModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public masterdeparmentService: MasterDepartmentService, private router: Router,private authService:AuthService ) { }

  ngOnInit() {
    this.masterdeparmentService.getDepartmentListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
      this.data = res.data;
    });

  }

  deleteRecord(id: any) {
    this.loading = true;
    this.masterdeparmentService.deleteMasterDepartmentById(id)
      .subscribe(res => {
        this.loading = false;
        this.router.navigate(['/master/department/list']);
      }, (err) => {
        console.log(err);
        this.loading = false;
      }
      );
  }





}
