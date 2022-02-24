import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MastersectionService } from '../../services/mastersection.service';
import { MasterSectionModel } from '../../../../../models/master-section-model';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-mastersection-list',
  templateUrl: './mastersection-list.component.html',
  styleUrls: ['./mastersection-list.component.scss']
})
export class MastersectionListComponent implements OnInit {

  

  public data: MasterSectionModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';


  constructor(public mastersectionService: MastersectionService, private router: Router, private authService:AuthService) { }


  ngOnInit() {
    debugger;
        this.mastersectionService.getMasterSectionListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
          this.data = res.data;
        });
    
      }

      deleteRecord(id: any) {
        this.loading = true;
        this.mastersectionService.deleteMasterSectionById(id)
          .subscribe(res => {
            this.loading = false;
            this.router.navigate(['/master/section/list']);
          }, (err) => {
            console.log(err);
            this.loading = false;
          }
          );
      }

      addMasterSection(){
        this.router.navigate(['/mastersection/add'])
      }
    }