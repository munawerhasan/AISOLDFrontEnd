import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, assignmentServices, subjectServices,masterServices } from 'src/environments/environment';
import { AssignmentModel, AssignmentModelFormData } from '../../../models/assignement-model';

@Injectable({
  providedIn: 'root'
})
export class AssignmentService {

  constructor(private http: HttpClient) { }

  getAssignmentByIdAPI(assignmentId) {
    return this.http.get<any>(`${environment.baseUrl}${assignmentServices.getAssignmentByIdAPI}${'?id=' + assignmentId}`);
  }

  getAssignmentListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get<any>(`${environment.baseUrl}${assignmentServices.getAssignmentListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getAssignmentListByStudentAPI(userId, schoolId, status) {
    return this.http.get<any>(`${environment.baseUrl}${assignmentServices.getAssignmentByStudentAPI}${'?studentUserId=' + userId + '&schoolId=' + schoolId + '&status=' + status}`);
  }

  getAssignmentListByPublisherAPI(userId, schoolId, status) {
    return this.http.get<any>(`${environment.baseUrl}${assignmentServices.getAssignmentByPublisherAPI}${'?publisherUserId=' + userId + '&schoolId=' + schoolId + '&status=' + status}`);
  }

  getUserAssignmentListBySchoolIdAndStatusAPI(schoolId, status, userId) {
    return this.http.get<any>(`${environment.baseUrl}${assignmentServices.getUserAssignmentListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getAssignmentListByClassSectionSubjectStatusAPI(schoolId, status, classId, sectionId, subjectId) {
    return this.http.get<any>(`${environment.baseUrl}${assignmentServices.getAssignmentListByClassSectionSubjectStatusAPI}${'?schoolId=' + schoolId + '&status=' + status + '&classId=' + classId + '&sectionId=' + sectionId + '&subjectId=' + subjectId}`);
  }

  getUserAssignmentListGenericAPI(schoolId, status, assignmentId, classId, sectionId, subjectId) {
    return this.http.get<any>(`${environment.baseUrl}${assignmentServices.getUserAssignmentListGenericAPI}${'?schoolId=' + schoolId + '&status=' + status + '&assignmentId=' + assignmentId + '&classId=' + classId + '&sectionId=' + sectionId + '&subjectId=' + subjectId}`);
  }
  getAssignmentAssessmentListGenericAPI(schoolId, status, assignmentId, classId, sectionId, subjectId, userId) {
    return this.http.get<any>(`${environment.baseUrl}${assignmentServices.getAssignmentAssessmentListGenericAPI}${'?schoolId=' + schoolId + '&status=' + status + '&assignmentId=' + assignmentId + '&classId=' + classId + '&sectionId=' + sectionId + '&subjectId=' + subjectId + '&userId=' + userId}`);
  }

  // getClassById(id) {
  //   return this.http.get<any>(`${environment.baseUrl}${classServices.getClassByIdAPI}${'?id=' + id}`);
  // }

  // deleteClassById(id) {
  //   return this.http.post<any>(`${environment.baseUrl}${classServices.deleteClassAPI}`, id);
  // }

  addAssignment(data) {
    return this.http.post<any>(`${environment.baseUrl}${assignmentServices.addAssignmentAPI}`, data);
  }

  addUserAssignment(data) {
    return this.http.post<any>(`${environment.baseUrl}${assignmentServices.addUserAssignmentAPI}`, data);
  }

  updateUserAssignment(data) {
    return this.http.post<any>(`${environment.baseUrl}${assignmentServices.updateUserAssignmentAPI}`, data);
  }

  addAssignmentAssessmentAPI(data) {
    return this.http.post<any>(`${environment.baseUrl}${assignmentServices.addAssignmentAssessmentAPI}`, data);
  }

  getSubjectTeacherMappingListGeneric(schoolId, status, teacherUserId, masterClassId, masterSectionId, masterSubjectId) {
    return this.http.get<any>(`${environment.baseUrl}${subjectServices.getSubjectTeacherMappingListGenericAPI}${'?schoolId=' + schoolId + '&status=' + status +'&teacherUserId=' + teacherUserId + '&masterClassId=' + masterClassId + '&masterSectionId=' + masterSectionId+ '&masterSubjectId=' + masterSubjectId}`);
  }

  getMasterClassListByTeacher(schoolId, status, teacherUserId) {
    return this.http.get<any>(`${environment.baseUrl}${masterServices.getMasterClassListByTeacherAPI}${'?schoolId=' + schoolId + '&status=' + status +'&teacherUserId=' + teacherUserId}`);
  }

  // updateClass(classModel: ClassModel) {
  //   return this.http.post<any>(`${environment.baseUrl}${classServices.updateClassAPI}`, classModel);
  // }
}
