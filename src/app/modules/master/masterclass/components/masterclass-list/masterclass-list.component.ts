import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterclassService } from '../../services/masterclass.service';
import { MasterClassModel } from '../../../../../models/master-class-model';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-masterclass-list',
  templateUrl: './masterclass-list.component.html',
  styleUrls: ['./masterclass-list.component.scss',
   '../../../../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterclassListComponent implements OnInit {


  public data: MasterClassModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(public masterClassService: MasterclassService, private router: Router,private authService:AuthService ) { }

  ngOnInit() {
    this.masterClassService.getMasterClassListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
      this.data = res.data;
    });
   
 
  }

  deleteRecord(id: any) {
    this.loading = true;
    this.masterClassService.deleteMasterClassById(id)
      .subscribe(res => {
        this.loading = false;
        this.router.navigate(['/master/class/list']);
      }, (err) => {
        console.log(err);
        this.loading = false;
      }
      );
  }

  addMasterClass(){
    this.router.navigate(['/masterclass/add']);

  }



}
