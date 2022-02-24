import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MasteroccupationService } from '../../services/masteroccupation.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-masteroccupation-add',
  templateUrl: './masteroccupation-add.component.html',
  styleUrls: ['./masteroccupation-add.component.scss']
})
export class MasteroccupationAddComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false

  constructor( private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private MasteroccupationService: MasteroccupationService,
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
      this.MasteroccupationService.addMasterOccupation(this.form.value)
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
