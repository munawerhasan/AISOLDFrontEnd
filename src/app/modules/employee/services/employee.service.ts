import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, identityServices, employeeServices, personalDetailServices, subjectServices, masterServices } from 'src/environments/environment';
import { AccountDetailModel } from '../../../models/account-detail-model';
import { EmployeeModel } from '../../../models/employee-model';
import { PersonalDetailModel } from '../../../models/personal-detail-model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  addAccount(accountDetailModel: AccountDetailModel) {
    return this.http.post<any>(`${environment.baseUrl}${identityServices.addAccountAPI}`, accountDetailModel);
  }

  getEmployeeList() {
    return this.http.get(`${environment.baseUrl}${employeeServices.getEmployeeListAPI}`);
  }

  getEmployeeListGeneric(schoolId, status, masterEmployee, masterDepartment) {
    return this.http.get<any>(`${environment.baseUrl}${employeeServices.getEmployeeListGenericAPI}${'?schoolId=' + schoolId + '&status=' + status + '&masterEmployee=' + masterEmployee + '&masterDepartment=' + masterDepartment}`);
  }

  getSubjectTeacherMappingListGeneric(schoolId, status, teacherUserId, masterClassId, masterSectionId, masterSubjectId) {
    return this.http.get<any>(`${environment.baseUrl}${subjectServices.getSubjectTeacherMappingListGenericAPI}${'?schoolId=' + schoolId + '&status=' + status +'&teacherUserId=' + teacherUserId + '&masterClassId=' + masterClassId + '&masterSectionId=' + masterSectionId+ '&masterSubjectId=' + masterSubjectId}`);
  }

  getEmployeeListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get(`${environment.baseUrl}${employeeServices.getEmployeeListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getEmployeeById(id) {
    return this.http.get<any>(`${environment.baseUrl}${employeeServices.getEmployeeByIdAPI}${'?id=' + id}`);
  }

  deleteEmployeeById(id) {
    return this.http.post<any>(`${environment.baseUrl}${employeeServices.deleteEmployeeAPI}`, id);
  }
  
  deleteSubjectTeacherMapping(id) {
    return this.http.post(`${environment.baseUrl}${subjectServices.deleteSubjectTeacherMappingAPI}`, id);
  }

  addEmployee(employeeData: any) {
    return this.http.post<any>(`${environment.baseUrl}${employeeServices.addEmployeeAPI}`, employeeData);
  }

  updateEmployee(EmployeeModel: EmployeeModel) {
    return this.http.post<any>(`${environment.baseUrl}${employeeServices.updateEmployeeAPI}`, EmployeeModel);
  }


  getPersonalDetailList() {
    return this.http.get(`${environment.baseUrl}${personalDetailServices.getPersonalDetailListAPI}`);
  }

  getPersonalDetailById(id) {
    return this.http.get(`${environment.baseUrl}${personalDetailServices.getPersonalDetailByIdAPI}${'?id=' + id}`);
  }

  deletePersonalDetailById(id) {
    return this.http.post<any>(`${environment.baseUrl}${personalDetailServices.deletePersonalDetailAPI}`, id);
  }

  addPersonalDetail(PersonalDetailModel: PersonalDetailModel) {
    return this.http.post<any>(`${environment.baseUrl}${personalDetailServices.addPersonalDetailAPI}`, PersonalDetailModel);
  }

  updatePersonalDetail(PersonalDetailModel: PersonalDetailModel) {
    return this.http.post<any>(`${environment.baseUrl}${personalDetailServices.updatePersonalDetailAPI}`, PersonalDetailModel);
  }

  getMasterClassListBySchoolIdAndStatus(schoolId, status) {
    return this.http.get<any>(`${environment.baseUrl}${masterServices.getMasterClassListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterSectionListByMasterClass(schoolId, status, masterClassId) {
    return this.http.get<any>(`${environment.baseUrl}${masterServices.getMasterSectionListByMasterClassAPI}${'?schoolId=' + schoolId + '&status=' + status + '&masterClassId=' + masterClassId}`);
  }

  getMasterSubjectListByMasterClassAndSection(schoolId, status, masterClassId, masterSectionId) {
    return this.http.get<any>(`${environment.baseUrl}${masterServices.getMasterSubjectListByMasterClassAndSectionAPI}${'?schoolId=' + schoolId + '&status=' + status + '&masterClassId=' + masterClassId + '&masterSectionId=' + masterSectionId}`);
  }

  addSubjectTeacherMapping(mappingData: any) {
    return this.http.post<any>(`${environment.baseUrl}${subjectServices.addSubjectTeacherMappingAPI}`, mappingData);
  }

}
