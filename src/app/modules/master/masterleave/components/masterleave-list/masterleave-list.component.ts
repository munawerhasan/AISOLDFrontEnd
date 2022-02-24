import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterleaveService } from '../../services/masterleave.service';
import { MasterLeaveModel } from '../../../../../models/master-leave-model';

@Component({
  selector: 'app-masterleave-list',
  templateUrl: './masterleave-list.component.html',
  styleUrls: ['./masterleave-list.component.scss']
})
export class MasterleaveListComponent implements OnInit {

  public data: MasterLeaveModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';


  constructor(public masterleaveService: MasterleaveService, private router: Router, ) { }



  ngOnInit() {

    debugger;
    this.masterleaveService.getMasterLeaveList().subscribe((res: any) => {
      this.data = res.data;
    });

  }
/*
  deleteRecord(id: any) {
    this.loading = true;
    this.masterleaveService.deleteMasterLeaveById(id)
      .subscribe(res => {
        this.loading = false;
        this.router.navigate(['/master/leave/list']);
      }, (err) => {
        console.log(err);
        this.loading = false;
      }
      );
  }
*/

}


