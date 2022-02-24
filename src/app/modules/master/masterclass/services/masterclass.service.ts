
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices } from 'src/environments/environment';
import { MasterClassModel } from '../../../../models/master-class-model';

@Injectable({
  providedIn: 'root'
})
export class MasterclassService {

  constructor(private http: HttpClient) { }

  getMasterClassList() {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterClassListAPI}`);
  }

  getMasterClassListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterClassListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterClassById(id) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterClassByIdAPI}${'?id=' + id}`);
  }

  deleteMasterClassById(id) {
    return this.http.post(`${environment.baseUrl}${masterServices.deleteMasterClassAPI}`, id);
  }

  addMasterClass(MasterClassModel: MasterClassModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.addMasterClassAPI}`, MasterClassModel);
  }

  updateMasterClass(MasterClassModel: MasterClassModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.updateMasterClassAPI}`, MasterClassModel);
  }
}
