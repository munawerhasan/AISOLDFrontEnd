import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices } from 'src/environments/environment';
import { MasterOccupationModel } from '../../../../models/master-occupation-model';


@Injectable({
  providedIn: 'root'
})
export class MasteroccupationService {

  constructor(private http: HttpClient) { }

  getMasterOccupationList() {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterOccupationListAPI}`);
  }

  getMasterOccupationListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterOccupationListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterOccupationById(id) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterOccupationByIdAPI}${'?id=' + id}`);
  }

  deleteMasterOccupationById(id) {
    return this.http.post(`${environment.baseUrl}${masterServices.deleteMasterOccupationAPI}`, id);
  }

  addMasterOccupation(MasterOccupationModel: MasterOccupationModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.addMasterOccupationAPI}`, MasterOccupationModel);
  }

  updateMasterOccupation(MasterOccupationModel: MasterOccupationModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.updateMasterOccupationAPI}`, MasterOccupationModel);
  }
}
