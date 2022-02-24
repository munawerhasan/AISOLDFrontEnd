import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices } from 'src/environments/environment';
import { MasterSectionModel } from '../../../../models/master-section-model';

@Injectable({
  providedIn: 'root'
})
export class MastersectionService {

  constructor(private http: HttpClient) { }

  getMasterSectionList() {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterSectionListAPI}`);
  }

  getMasterSectionListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterSectionListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterSectionById(id) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterSectionByIdAPI}${'?id=' + id}`);
  }

  deleteMasterSectionById(id) {
    return this.http.post(`${environment.baseUrl}${masterServices.deleteMasterSectionAPI}`, id);
  }

  addMasterSection(MasterSectionModel: MasterSectionModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.addMasterSectionAPI}`, MasterSectionModel);
  }

  updateMasterSection(MasterSectionModel: MasterSectionModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.updateMasterSectionAPI}`, MasterSectionModel);
  }
}