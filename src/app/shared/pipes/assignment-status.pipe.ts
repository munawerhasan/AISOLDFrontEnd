import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'UserAssignmentStatus'
})
export class AssignmentStatusPipe implements PipeTransform {

  transform(value: any): string {
    status = "";

    if (value === 1) {
      status = "NOT SEEN";
    }
    else if (value === 2) {
      status = "SEEN";
    }
    else if (value === 3) {
      status = "SUBMITTED";
    }
    else if (value === 4) {
      status = "RE SUBMITTED";
    }
    else if (value === 5) {
      status = "COMPLETED";
    }
    else if (value === 6) {
      status = "NOT COMPLETED";
    }
    else if (value === 7) {
      status = "REJECTED";
    }
    else if (value === 8) {
      status = "STUDENT NEED TO DISCUSS";
    }
    else if (value === 9) {
      status = "TEACHER NEED TO DISCUSS";
    }
    else if (value === 10) {
      status = "SUCCESSFULLY COMPLETED";
    }
    else
    {
      status = "Unknown";
    }

    return status;
  }

}
