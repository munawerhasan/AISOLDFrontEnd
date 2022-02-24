import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { ClassService } from '../../services/class.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { MasterService } from '../../../../shared/master-service/master.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-class-add',
  templateUrl: './class-add.component.html',
  styleUrls: ['./class-add.component.scss']
})
export class ClassAddComponent implements OnInit {

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
    this.form = this.formBuilder.group({
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
      this.masterClasses=data.data;
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

    this.form.addControl('createdByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())));
    this.form.addControl('schoolId', new FormControl(parseInt(this.authService.currentUserValue.schoolId.toString())));

    console.log(JSON.stringify(this.form.value))

    this.loading = true;
    this.classService.addClass(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          
          if(data.isError===false)
          {
            swal({
              title: 'Success!',
              text: 'Record successfully submitted!',
              type: 'success'
            }).catch(swal.noop);
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

}
