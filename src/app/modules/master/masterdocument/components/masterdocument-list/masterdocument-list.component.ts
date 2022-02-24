import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterDocumentService } from '../../services/masterdocument.service';
import { MasterDocumentModel } from '../../../../../models/master-document-model';
import { AuthService } from '../../../../../core/auth/auth.service';


@Component({
  selector: 'app-masterdocument-list',
  templateUrl: './masterdocument-list.component.html',
  styleUrls: ['./masterdocument-list.component.scss']
})
export class MasterdocumentListComponent implements OnInit {

  public data: MasterDocumentModel[];
  loading = false;

  public rowsOnPage = 10;
  public filterQuery = '';
  public sortBy = '';
  public sortOrder = 'desc';


  constructor(public masterdocumentService: MasterDocumentService, private router: Router,private authService:AuthService ) { }


  ngOnInit() {
        this.masterdocumentService.getMasterDocumentListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe((res: any) => {
          this.data = res.data;
        });
    
      }

      deleteRecord(id: any) {
        this.loading = true;
        this.masterdocumentService.deleteMasterDocumentById(id)
          .subscribe(res => {
            this.loading = false;
            this.router.navigate(['/master/document/list']);
          }, (err) => {
            console.log(err);
            this.loading = false;
          }
          );
      }

}
