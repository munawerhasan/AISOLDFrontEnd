import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterbatchService } from '../../services/masterbatch.service';
import { MasterBatchModel } from '../../../../../models/master-batch-model';
import { AuthService } from '../../../../../core/auth/auth.service';

@Component({
  selector: 'app-masterbatch-list',
  templateUrl: './masterbatch-list.component.html',
  styleUrls: ['./masterbatch-list.component.scss',
    '../../../../../../assets/icon/icofont/css/icofont.scss']
})
export class MasterbatchListComponent implements OnInit {

  public data: MasterBatchModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(
    public masterbatchService: MasterbatchService, 
    private router: Router, 
    private authService:AuthService
    ) { }

  ngOnInit() {

    this.masterbatchService.getMasterBatchListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
      this.data = res.data;
    });

  }


  deleteRecord(id: any) {
    this.loading = true;
    this.masterbatchService.deleteMasterBatchById(id)
      .subscribe(res => {
        this.loading = false;
        this.router.navigate(['/master/batch/list']);
      }, (err) => {
        console.log(err);
        this.loading = false;
      }
      );
  }

}
