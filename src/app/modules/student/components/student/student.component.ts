import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {

    this.router.navigate(['/student/details/account-detail'], { skipLocationChange: true });
}

}
