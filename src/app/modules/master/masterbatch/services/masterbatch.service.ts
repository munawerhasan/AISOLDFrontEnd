import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices } from 'src/environments/environment';
import { MasterBatchModel } from '../../../../models/master-batch-model';

@Injectable({
  providedIn: 'root'
})
export class MasterbatchService {

  constructor(private http: HttpClient) { }

  getMasterBatchList() {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterBatchListAPI}`);
  }

  getMasterBatchListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterBatchListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterBatchById(id) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterBatchByIdAPI}${'?id=' + id}`);
  }

  deleteMasterBatchById(id) {
    return this.http.post(`${environment.baseUrl}${masterServices.deleteMasterBatchAPI}`, id);
  }

  addMasterBatch(MasterBatchModel: MasterBatchModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.addMasterBatchAPI}`, MasterBatchModel);
  }

  updateMasterBatch(MasterBatchModel: MasterBatchModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.updateMasterBatchAPI}`, MasterBatchModel);
  }
}
