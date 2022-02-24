import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices } from 'src/environments/environment';
import { MasterSubjectModel } from '../../../../models/master-subject-model';

@Injectable({
  providedIn: 'root'
})
export class MastersubjectService {

  constructor(private http: HttpClient) { }

  getMasterSubjectList() {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterSubjectListAPI}`);
  }

  getMasterSubjectListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterSubjectListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterSubjectById(id) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterSubjectByIdAPI}${'?id=' + id}`);
  }

  deleteMasterSubjectById(id) {
    return this.http.post(`${environment.baseUrl}${masterServices.deleteMasterSubjectAPI}`, id);
  }

  addMasterSubject(MasterSubjectModel: MasterSubjectModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.addMasterSubjectAPI}`, MasterSubjectModel);
  }

  updateMasterSubject(MasterSubjectModel: MasterSubjectModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.updateMasterSubjectAPI}`, MasterSubjectModel);
  }
}
