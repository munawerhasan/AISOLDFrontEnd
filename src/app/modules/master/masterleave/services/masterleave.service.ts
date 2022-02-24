 
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices } from 'src/environments/environment';
import { MasterLeaveModel } from '../../../../models/master-leave-model';

@Injectable({
  providedIn: 'root'
})
export class MasterleaveService {

  constructor(private http: HttpClient) { }

  getMasterLeaveList() {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterLeaveListAPI}`);
  }

  getMasterLeaveById(id) {
    return this.http.get(`${environment.baseUrl}${masterServices.getMasterLeaveByIdAPI}${'?id=' + id}`);
  }

  deleteMasterLeaveById(id) {
    return this.http.post(`${environment.baseUrl}${masterServices.deleteMasterLeaveAPI}`, id);
  }

  addMasterLeave(MasterLeaveModel: MasterLeaveModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.addMasterLeaveAPI}`, MasterLeaveModel);
  }

  updateMasterLeave(MasterLeaveModel: MasterLeaveModel) {
    return this.http.post(`${environment.baseUrl}${masterServices.updateMasterLeaveAPI}`, MasterLeaveModel);
  }
}
