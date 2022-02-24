import { Component, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../../models/employee-model';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { AuthService } from '../../../../core/auth/auth.service';
import { LocalStorageService } from '../../../../core/local-storage/local-storage.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {

  employeeModel: EmployeeModel = new EmployeeModel()
  title = 'Something wrong.';

  constructor(
    private authService: AuthService,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {

    this.employeeService.getEmployeeById(this.localStorageService.getEmployeeId())
      .subscribe(res => {
        
        Object.assign(this.employeeModel, res.data);
        
      this.employeeModel.personalDetailId = this.localStorageService.getPersonalDetailId();

      this.localStorageService.removeAllLocalStorage();
      
      this.employeeService.updateEmployee(this.employeeModel).subscribe(res => {
        if (res.isError === false)
        {
          this.title = 'Thank You, Employee has been registered successfully.';
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
