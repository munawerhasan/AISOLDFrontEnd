import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ClassService } from '../../services/class.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { MasterService } from '../../../../shared/master-service/master.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-class-update',
  templateUrl: './class-update.component.html',
  styleUrls: ['./class-update.component.scss']
})
export class ClassUpdateComponent implements OnInit {

  batches:any;
  masterClasses:any;
  masterSections:any;
  form: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private classService: ClassService,
    private masterService: MasterService,
    private authService:AuthService
  ) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('Id');
    console.log(id)
    this.fetchData(id);

    this.form = this.formBuilder.group({
      classId:[0],
      financialYear: ['', Validators.required],
      masterBatchId: [null, Validators.required],
      masterClassId: [null, Validators.required],
      masterSectionId: [null, Validators.required],
      assessmentMode: [null],
      startDate: [null],
      endDate: [null],
      stength: [0],
      displayOrder: [0],
      activeStatus: [null, Validators.required],
    });

    this.masterService.MasterBatch().subscribe((data: any) => {
      this.batches = data.data;
    });
    this.masterService.MasterClass().subscribe((data: any) => {
      this.masterClasses = data.data;
    });
    this.masterService.MasterSection().subscribe((data: any) => {
      this.masterSections = data.data;
    });


  }
  get f() { return this.form.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.form.addControl('updatedByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())));
    this.form.addControl('schoolId', new FormControl(parseInt(this.authService.currentUserValue.schoolId.toString())));

    console.log(JSON.stringify(this.form.value))

    this.loading = true;
    this.classService.updateClass(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          
          if(data.isError===false)
          {
            swal({
              title: 'Success!',
              text: 'Record successfully updated!',
              type: 'success'
            }).catch(swal.noop);

            this.router.navigate(["/class/list"])
          }
          else
          {
            swal({
              title: 'Error!',
              text: data.message,
              type: 'warning'
            }).catch(swal.noop);
          }
          
        },
        error => {
          this.loading = false;
          console.log(JSON.stringify(error))
          swal({
            title: 'Error!',
            text: error.message,
            type: 'warning'
          }).catch(swal.noop);
        });
  }

  fetchData(id:any) {
    this.classService.getClassById(id).subscribe((res: any) => {
      //res.data = res.data;
      console.log(res.data)
      this.form.setValue({
        classId:res.data['classId'],
        financialYear: res.data['financialYear'],
        masterBatchId: res.data['masterBatchId'],
        masterClassId: res.data['masterClassId'],
        masterSectionId: res.data['masterSectionId'],
        assessmentMode: res.data['assessmentMode'],
        startDate:res.data['startDate'],
        endDate: res.data['endDate'],
        stength: res.data['stength'],
        displayOrder: res.data['displayOrder'],
        activeStatus: res.data['activeStatus']
      });
    });
  }

}
