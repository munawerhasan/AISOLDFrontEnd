import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterEmployeeService } from '../../services/masteremployee.service';
import { MasterEmployeeModel } from '../../../../../models/master-employee-model';
import { AuthService } from '../../../../../core/auth/auth.service';


@Component({
  selector: 'app-masteremployee-list',
  templateUrl: './masteremployee-list.component.html',
  styleUrls: ['./masteremployee-list.component.scss']
})
export class MasteremployeeListComponent implements OnInit {

  public data: MasterEmployeeModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';


  constructor(public masteremployeeService: MasterEmployeeService, private router: Router, private authService:AuthService) { }


  ngOnInit() {
    debugger;
        this.masteremployeeService.getMasterEmployeeListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
          this.data = res.data;
        });
    
      }

      deleteRecord(id: any) {
        this.loading = true;
        this.masteremployeeService.deleteMasterEmployeeById(id)
          .subscribe(res => {
            this.loading = false;
            this.router.navigate(['/master/employee/list']);
          }, (err) => {
            console.log(err);
            this.loading = false;
          }
          );
      }

}
