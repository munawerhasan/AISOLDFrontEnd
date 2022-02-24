import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices } from 'src/environments/environment';
import { MasterDocumentModel } from '../../../../models/master-document-model';

@Injectable({
  providedIn: 'root'
})
export class MasterDocumentService {

  constructor(private http: HttpClient) { }

  getMasterDocumentList() {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterDocumentListAPI}`);
  }

  getMasterDocumentListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterDocumentListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterDocumentById(id) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterDocumentByIdAPI}${'?id=' + id}`);
  }

  deleteMasterDocumentById(id) {
    return this.http.post(`${environment.baseUrl}${masterServices.deleteMasterDocumentAPI}`, id);
  }

  addMasterDocument(MasterDocumentModel: MasterDocumentModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.addMasterDocumentAPI}`, MasterDocumentModel);
  }

  updateMasterDocument(MasterDocumentModel: MasterDocumentModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.updateMasterDocumentAPI}`, MasterDocumentModel);
  }
}
