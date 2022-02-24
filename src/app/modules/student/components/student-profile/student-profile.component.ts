import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { StudentService } from "../../services/student.service";
import { AuthService } from '../../../../core/auth/auth.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss',
  '../../../../../assets/charts/radial/css/radial.scss',]
})
export class StudentProfileComponent implements OnInit {

  studentDetail:any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService,
    private authService:AuthService
  ) { }

  ngOnInit() {
    let userId = this.route.snapshot.paramMap.get('userId');
    console.log(userId)
    this.fetchData(userId);
  }

  fetchData(id:any) {
    this.studentService.getStudentByUserId(id).subscribe(res=>{
      this.studentDetail=res.data;
    })
  }

}
