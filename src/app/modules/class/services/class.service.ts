import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment, classServices,subjectServices } from 'src/environments/environment';
import { ClassModel } from '../../../models/class-model';


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http: HttpClient) { }

  getClassList() {
    return this.http.get<any>(`${environment.baseUrl}${classServices.getClassListAPI}`);
  }

  getClassListBySchoolIdAndStatusAPI(schoolId, status) {
    return this.http.get<any>(`${environment.baseUrl}${classServices.getClassListBySchoolIdAndStatusAPI}${'?schoolId=' + schoolId + '&status=' + status}`);
  }

  getClassById(id) {
    return this.http.get<any>(`${environment.baseUrl}${classServices.getClassByIdAPI}${'?id=' + id}`);
  }

  deleteClassById(id) {
    return this.http.post<any>(`${environment.baseUrl}${classServices.deleteClassAPI}`, id);
  }

  addClass(classModel: ClassModel) {
    return this.http.post<any>(`${environment.baseUrl}${classServices.addClassAPI}`, classModel);
  }

  updateClass(classModel: ClassModel) {
    return this.http.post<any>(`${environment.baseUrl}${classServices.updateClassAPI}`, classModel);
  }

 
}
