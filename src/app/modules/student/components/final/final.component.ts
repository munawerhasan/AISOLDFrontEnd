import { Component, OnInit } from '@angular/core';
import { StudentModel } from '../../../../models/student-model';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import swal from 'sweetalert2';
import { first } from 'rxjs/operators';
import { StudentService } from '../../services/student.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { LocalStorageService } from '../../../../core/local-storage/local-storage.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  studentModel: StudentModel = new StudentModel()
  title = 'Something wrong.';

  constructor(
    private authService: AuthService,
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {

    console.log(this.localStorageService.getStudentId())
    this.studentService.getStudentById(this.localStorageService.getStudentId())
      .subscribe(res => {
        
        Object.assign(this.studentModel, res.data);
        
      this.studentModel.personalDetailId = this.localStorageService.getPersonalDetailId();
      this.studentModel.parentDetailId = this.localStorageService.getParentDetailId();

      this.localStorageService.removeAllLocalStorage();
      
      this.studentService.updateStudent(this.studentModel).subscribe(res => {
        if (res.isError === false)
        {
          this.title = 'Thank You, Student has been registered successfully.';
        }
        else
        {
          this.title = res.message;
        }
        console.log(JSON.stringify(res));

      })

      })

      

  }

}
