import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, schoolServices } from 'src/environments/environment';
import { SchoolModel } from '../../../models/school-model';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient) { }

  getSchoolList() {
    return this.http.get(`${environment.baseUrl}${schoolServices.getSchoolListAPI}`);
  }

  getSchoolById(id) {
    return this.http.get(`${environment.baseUrl}${schoolServices.getSchoolByIdAPI}${'?id=' + id}`);
  }

  deleteSchoolById(id) {
    return this.http.post(`${environment.baseUrl}${schoolServices.deleteSchoolAPI}`, id);
  }

  addSchool(schoolModel: SchoolModel) {
    return this.http.post(`${environment.baseUrl}${schoolServices.addSchoolAPI}`, schoolModel);
  }

  updateSchool(schoolModel: SchoolModel) {
    return this.http.post(`${environment.baseUrl}${schoolServices.updateSchoolAPI}`, schoolModel);
  }

}

