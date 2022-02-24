import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MastersectionService } from '../../services/mastersection.service';
import { AuthService } from '../../../../../core/auth/auth.service';
import swal from 'sweetalert2';


@Component({
  selector: 'app-mastersection-update',
  templateUrl: './mastersection-update.component.html',
  styleUrls: ['./mastersection-update.component.scss']
})
export class MastersectionUpdateComponent implements OnInit {

  form: FormGroup;
  loading = false;
  submitted = false;


  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private mastersectionService: MastersectionService,
    private authService:AuthService) { }


  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('Id');
    console.log(id)
    this.fetchData(id);

    this.form = this.formBuilder.group({
      masterSectionId: [0, Validators.required],
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
    this.mastersectionService.updateMasterSection(this.form.value)
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
          this.router.navigate(['/section/list']);

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

    this.mastersectionService.getMasterSectionById(id).subscribe((res: any) => {
      //res.data = res.data;
      this.form.setValue({
        masterSectionId:res.data['masterSectionId'],
        name: res.data['name'],
         displayOrder: res.data['displayOrder'],
        activeStatus: res.data['activeStatus']
        
      });

    });


  }

}
