import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MasterDepartmentService } from '../../services/masterdepartment.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-masterdepartment-add',
  templateUrl: './masterdepartment-add.component.html',
  styleUrls: ['./masterdepartment-add.component.scss']
})
export class MasterdepartmentAddComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false


  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private masterdeparmentService: MasterDepartmentService,
    private authService:AuthService) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      displayOrder: ['',Validators.required],
      activeStatus: ['',Validators.required],
    });
  }
  get f() { return this.form.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.form.addControl('schoolId', new FormControl(parseInt(this.authService.currentUserValue.schoolId.toString())))
    this.form.addControl('createdByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())))

    console.log(JSON.stringify(this.form.value))

    this.loading = true;
    this.masterdeparmentService.addMasterDepartment(this.form.value)
      .pipe(first())
      .subscribe(
        data => {
          this.loading = false;
          console.log(JSON.stringify(data))
          swal({
            title: 'Success!',
            text: 'Record successfully submitted!',
            type: 'success'
          }).catch(swal.noop);
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


}
