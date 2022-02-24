import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices } from 'src/environments/environment';
import { MasterDepartmentModel } from '../../../../models/master-department-model';

@Injectable({
  providedIn: 'root'
})
export class MasterDepartmentService {

  constructor(private http: HttpClient) { }

  getMasterDepartmentList() {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterDepartmentListAPI}`);
  }

  getDepartmentListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterDepartmentListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterDepartmentById(id) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterDepartmentByIdAPI}${'?id=' + id}`);
  }

  deleteMasterDepartmentById(id) {
    return this.http.post(`${environment.baseUrl}${masterServices.deleteMasterDepartmentAPI}`, id);
  }

  addMasterDepartment(MasterDepartmentModel: MasterDepartmentModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.addMasterDepartmentAPI}`, MasterDepartmentModel);
  }

  updateMasterDepartment(MasterDepartmentModel: MasterDepartmentModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.updateMasterDepartmentAPI}`, MasterDepartmentModel);
  }
}
