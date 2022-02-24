import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MastersubjectService } from '../../services/mastersubject.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mastersubject-update',
  templateUrl: './mastersubject-update.component.html',
  styleUrls: ['./mastersubject-update.component.scss']
})

export class MastersubjectUpdateComponent implements OnInit {



  form: FormGroup;
  loading = false;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private mastersubjectService: MastersubjectService,
    private authService:AuthService) { }


  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('Id');
    console.log(id)
    this.fetchData(id);

    this.form = this.formBuilder.group({
      masterSubjectId: [0, Validators.required],
      subjectName: ['', Validators.required],
      subjectCode: ['', Validators.required],
      marksType: ['', Validators.required],
      subjectType: ['', Validators.required],        
      displayOrder: ['',Validators.required],
      activeStatus: ['',Validators.required],
    });
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.form.addControl('schoolId', new FormControl(parseInt(this.authService.currentUserValue.schoolId.toString())))
    this.form.addControl('updatedByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())))

    console.log(JSON.stringify(this.form.value))

    this.loading = true;
    this.mastersubjectService.updateMasterSubject(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          console.log(JSON.stringify(data))
          swal({
            title: 'Success!',
            text: 'Record successfully updated!',
            type: 'success'
          }).catch(swal.noop);
          this.router.navigate(['/subject/list']);

        },
        error => {
          this.loading = false;
          console.log(JSON.stringify(error))
          swal({
            title: 'Error!',
            text: 'Somthing went wrong!',
            type: 'warning'
          }).catch(swal.noop);
        });
  }

  fetchData(id:any) {
    this.mastersubjectService.getMasterSubjectById(id).subscribe((res: any) => {
      //res.data = res.data;
      this.form.setValue({
        masterSubjectId:res.data['masterSubjectId'],       
        subjectName: res.data['subjectName'],
        subjectCode: res.data['subjectCode'],
        marksType: res.data['marksType'],
        subjectType: res.data['subjectType'],  
         displayOrder: res.data['displayOrder'],
        activeStatus: res.data['activeStatus']

      });

    });


  }
}
