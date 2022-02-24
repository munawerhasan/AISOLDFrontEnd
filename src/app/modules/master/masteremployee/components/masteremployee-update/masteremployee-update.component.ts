import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MasterEmployeeService } from '../../services/masteremployee.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-masteremployee-update',
  templateUrl: './masteremployee-update.component.html',
  styleUrls: ['./masteremployee-update.component.scss']
})
export class MasteremployeeUpdateComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private masteremployeeService: MasterEmployeeService,
    private authService:AuthService) { }


  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('Id');
    console.log(id)
    this.fetchData(id);

    this.form = this.formBuilder.group({
      masterEmployeeId: [0, Validators.required],
      name: ['', Validators.required],
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
    this.masteremployeeService.updateMasterEmployee(this.form.value)
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
          this.router.navigate(['/employee/list']);

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

    this.masteremployeeService.getMasterEmployeeById(id).subscribe((res: any) => {
      //res.data = res.data;
      this.form.setValue({
        masterEmployeeId:res.data['masterEmployeeId'],
        name: res.data['name'],
         displayOrder: res.data['displayOrder'],
        activeStatus: res.data['activeStatus']
        
      });

    });



  }
}
