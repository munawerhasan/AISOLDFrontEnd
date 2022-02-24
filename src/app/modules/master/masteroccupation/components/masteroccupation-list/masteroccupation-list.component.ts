import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasteroccupationService } from '../../services/masteroccupation.service';
import { MasterOccupationModel } from '../../../../../models/master-Occupation-model';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-masteroccupation-list',
  templateUrl: './masteroccupation-list.component.html',
  styleUrls: ['./masteroccupation-list.component.scss']
})
export class MasteroccupationListComponent implements OnInit {

  public data: MasterOccupationModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';


  constructor(public masteroccupationService: MasteroccupationService, private router: Router, private authService:AuthService) { }


  ngOnInit() {
    debugger;
        this.masteroccupationService.getMasterOccupationListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
          this.data = res.data;
        });
    
      }

      deleteRecord(id: any) {
        this.loading = true;
        this.masteroccupationService.deleteMasterOccupationById(id)
          .subscribe(res => {
            this.loading = false;
            this.router.navigate(['/master/occupation/list']);
          }, (err) => {
            console.log(err);
            this.loading = false;
          }
          );
      }
    }

 
 
