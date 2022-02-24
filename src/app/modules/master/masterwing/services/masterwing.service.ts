import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices } from 'src/environments/environment';
import { MasterWingGroupModel } from '../../../../models/master-wing-model';

@Injectable({
  providedIn: 'root'
})
export class MasterwingService {
  constructor(private http: HttpClient) { }

  getMasterWingList() {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterWingListAPI}`);
  }

  getMasterWingListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterWingListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterWingById(id) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterWingByIdAPI}${'?id=' + id}`);
  }

  deleteMasterWingById(id) {
    return this.http.post(`${environment.baseUrl}${masterServices.deleteMasterWingAPI}`, id);
  }

  addMasterWing(MasterWingModel: MasterWingGroupModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.addMasterWingAPI}`, MasterWingModel);
  }

  updateMasterWing(MasterWingModel: MasterWingGroupModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.updateMasterWingAPI}`, MasterWingModel);
  }
}
