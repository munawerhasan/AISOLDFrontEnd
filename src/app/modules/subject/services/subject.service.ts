import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, masterServices,subjectServices } from 'src/environments/environment';
import { SubjectMappingModel,SubjectModel } from '../../../models/subject-model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }

  addSubjectMapping(subjectModel: SubjectMappingModel[]) {
    return this.http.post<any>(`${environment.baseUrl}${subjectServices.addSubjectMappingAPI}`, subjectModel);
  }

  getSubjectList() {
    return this.http.get<any>(`${environment.baseUrl}${subjectServices.getSubjectListAPI}`);
  }

  getSubjectListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get<any>(`${environment.baseUrl}${subjectServices.getSubjectListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getSubjectById(id) {
    return this.http.get<any>(`${environment.baseUrl}${subjectServices.getSubjectByIdAPI}${'?id=' + id}`);
  }

  deleteSubjectById(id) {
    return this.http.post<any>(`${environment.baseUrl}${subjectServices.deleteSubjectAPI}`, id);
  }

  addSubject(SubjectModel: SubjectModel) {
    return this.http.post<any>(`${environment.baseUrl}${subjectServices.addSubjectAPI}`, SubjectModel);
  }

  updateSubject(SubjectModel: SubjectModel) {
    return this.http.post<any>(`${environment.baseUrl}${subjectServices.updateSubjectAPI}`, SubjectModel);
  }


  getMasterClassListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get<any>(`${environment.baseUrl}${masterServices.getMasterClassListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getMasterSubjectListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get<any>(`${environment.baseUrl}${masterServices.getMasterSubjectListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getSubjectTeacherMappingListGeneric(schoolId, status, teacherUserId, masterClassId, masterSectionId, masterSubjectId) {
    return this.http.get<any>(`${environment.baseUrl}${subjectServices.getSubjectTeacherMappingListGenericAPI}${'?schoolId=' + schoolId + '&status=' + status +'&teacherUserId=' + teacherUserId + '&masterClassId=' + masterClassId + '&masterSectionId=' + masterSectionId+ '&masterSubjectId=' + masterSubjectId}`);
  }
}
