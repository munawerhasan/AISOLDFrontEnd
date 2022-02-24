import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices } from 'src/environments/environment';
import { MasterEmployeeModel } from '../../../../models/master-employee-model';

@Injectable({
  providedIn: 'root'
})
export class MasterEmployeeService {

  constructor(private http: HttpClient) { }

  getMasterEmployeeList() {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterEmployeeListAPI}`);
  }

  getMasterEmployeeListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterEmployeeListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterEmployeeById(id) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterEmployeeByIdAPI}${'?id=' + id}`);
  }

  deleteMasterEmployeeById(id) {
    return this.http.post(`${environment.baseUrl}${masterServices.deleteMasterEmployeeAPI}`, id);
  }

  addMasterEmployee(MasterEmployeeModel: MasterEmployeeModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.addMasterEmployeeAPI}`, MasterEmployeeModel);
  }

  updateMasterEmployee(MasterEmployeeModel: MasterEmployeeModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.updateMasterEmployeeAPI}`, MasterEmployeeModel);
  }
}
