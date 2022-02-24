import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { AdminService } from '../../services/admin.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { SchoolModel } from '../../../../models/school-model';

@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})
export class AdminAddComponent implements OnInit {

  form: FormGroup;
  schools:SchoolModel[];
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private adminService: AdminService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {

    this.form = this.formBuilder.group({
      userName: ['', Validators.required],
      email: ['', Validators.required],
      password: [null, [Validators.required, Validators.min(6)]],
      confirmPassword: [null, [Validators.required, Validators.min(6)]],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      middleName: [''],
      schoolId:[null, Validators.required]
    });

    this.adminService.getSchoolList().subscribe((data: any) => {
      this.schools = data.data;
    });

  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.form.addControl('createdByUserId', new FormControl(parseInt(this.authService.currentUserValue.id.toString())));
    this.form.addControl('role', new FormControl("Admin"))

    this.adminService.addAccount(this.form.value)
      .pipe(first())
      .subscribe(
        res => {

          if (res.isError === false) {
            swal({
              title: 'Success!',
              text: 'Record successfully submitted!',
              type: 'success'
            }).catch(swal.noop)

            this.router.navigate(["/admin"])

          }
          else {
            swal({
              title: 'Error!',
              text: res.message,
              type: 'warning'
            }).catch(swal.noop);
          }

        },
        error => {
          console.log(JSON.stringify(error))
          swal({
            title: 'Error!',
            text: error.message,
            type: 'warning'
          }).catch(swal.noop);
        });
  }

}
