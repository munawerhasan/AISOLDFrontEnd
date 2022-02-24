import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { AccountDetailModel } from '../../../../models/account-detail-model';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit {

  public data: AccountDetailModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';

  constructor(private adminService:AdminService,private router: Router,) { }

  ngOnInit() {
    this.adminService.getUserList(2).subscribe((res: any) => {
      this.data = res.data;
    });

  }

}
