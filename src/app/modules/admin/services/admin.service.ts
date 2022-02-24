import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, identityServices, schoolServices,configurationService } from 'src/environments/environment';
import { AccountDetailModel } from '../../../models/account-detail-model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addAccount(accountDetailModel: AccountDetailModel) {
    return this.http.post<any>(`${environment.baseUrl}${identityServices.addAccountAPI}`, accountDetailModel);
  }

  getSchoolList() {
    return this.http.get(`${environment.baseUrl}${schoolServices.getSchoolListAPI}`);
  }

  getUserList(roleId) {
    return this.http.get(`${environment.baseUrl}${identityServices.getUsersAPI}${'?roleId=' + roleId}`);
  }

  addConfiguration(configurationData) {
    return this.http.post<any>(`${environment.baseUrl}${configurationService.addConfigurationAPI}`, configurationData);
  }

  updateConfiguration(configurationData) {
    return this.http.post<any>(`${environment.baseUrl}${configurationService.updateConfigurationAPI}`, configurationData);
  }
  getConfigurationBySchoolId(schoolId) {
    return this.http.get<any>(`${environment.baseUrl}${configurationService.getConfigurationBySchoolIdAPI}${'?schoolId=' + schoolId}`);
  }
  getConfigurationById(id) {
    return this.http.get<any>(`${environment.baseUrl}${configurationService.getConfigurationByIdAPI}${'?id=' + id}`);
  }
}
