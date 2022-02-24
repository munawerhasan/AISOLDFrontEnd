import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterwingService } from '../../services/masterwing.service';
import { MasterWingGroupModel } from '../../../../../models/master-wing-model';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-masterwing-list',
  templateUrl: './masterwing-list.component.html',
  styleUrls: ['./masterwing-list.component.scss']
})
export class MasterwingListComponent implements OnInit {

  public data: MasterWingGroupModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';


  constructor(public masterwingGroupService: MasterwingService, private router: Router, private authService:AuthService) { }


  ngOnInit() {
    debugger;
        this.masterwingGroupService.getMasterWingListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
          this.data = res.data;
        });
    
      }

      deleteRecord(id: any) {
        this.loading = true;
        this.masterwingGroupService.deleteMasterWingById(id)
          .subscribe(res => {
            this.loading = false;
            this.router.navigate(['/master/winggroup/list']);
          }, (err) => {
            console.log(err);
            this.loading = false;
          }
          );
      }
    }
