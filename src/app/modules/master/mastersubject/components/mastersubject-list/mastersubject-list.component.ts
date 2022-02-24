import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MastersubjectService } from '../../services/mastersubject.service';
import { MasterSectionModel } from '../../../../../models/master-section-model';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-mastersubject-list',
  templateUrl: './mastersubject-list.component.html',
  styleUrls: ['./mastersubject-list.component.scss']
})
export class MastersubjectListComponent implements OnInit {

  

  public data: MasterSectionModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public mastersubjectService: MastersubjectService, private router: Router, private authService:AuthService) { }

  ngOnInit() {
    debugger;
        this.mastersubjectService.getMasterSubjectListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
          this.data = res.data;
        });
    
      }

      deleteRecord(id: any) {
        this.loading = true;
        this.mastersubjectService.deleteMasterSubjectById(id)
          .subscribe(res => {
            this.loading = false;
            this.router.navigate(['/master/subject/list']);
          }, (err) => {
            console.log(err);
            this.loading = false;
          }
          );
      }
    }
