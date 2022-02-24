import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject.service';
import { SubjectMappingModel } from '../../../../models/subject-model';
import { AuthService } from '../../../../core/auth/auth.service';
import { MasterClassModel } from '../../../../models/master-class-model';
import { MasterSubjectModel } from '../../../../models/master-subject-model';

import swal from 'sweetalert2';

// export class SubjectModel{
//   schoolId: number;
//     masterSubjectId: number;
//     masterClassId: number;
//     activeStatus: number;
//     createdByUserId: number;
//     combination: string;
// }

@Component({
  selector: 'app-subject-mapping',
  templateUrl: './subject-mapping.component.html',
  styleUrls: ['./subject-mapping.component.scss',
    '../../../../../assets/icon/icofont/css/icofont.scss'
  ]
})
export class SubjectMappingComponent implements OnInit {

  classData: MasterClassModel[];
  subjectData: MasterSubjectModel[];
  selectedSubjectList: SubjectMappingModel[] = [];
  subejectModel: SubjectMappingModel = new SubjectMappingModel();

  constructor(
    private subjectService: SubjectService,
    private authService: AuthService
  ) { }
  ngOnInit() {

    this.subjectService.getMasterClassListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe(res => {
      this.classData = res.data
    })

    this.subjectService.getMasterSubjectListBySchoolIdAndStatusAPI(this.authService.currentUserValue.schoolId,0).subscribe(res => {
     this.subjectData = res.data
    })

  }


  clickedItem(subjectId, classId, isChecked: boolean) {
    if (isChecked) {
      this.selectedSubjectList.push({
        schoolId: parseInt(this.authService.currentUserValue.schoolId.toString()),
        masterClassId: classId,
        masterSubjectId: subjectId,
        activeStatus: 1,
        createdByUserId: parseInt(this.authService.currentUserValue.id.toString()),
        combination: classId + "_" + subjectId
      })
      //alert(Object.keys(this.selectedPackageList).length)
    } else {
      // this.subejectModel.schoolId = parseInt(this.authService.currentUserValue.schoolId.toString());
      // this.subejectModel.masterClassId = classId;
      // this.subejectModel.masterSubjectId = subjectId;
      // this.subejectModel.activeStatus = 1
      // this.subejectModel.createdByUserId = parseInt(this.authService.currentUserValue.id.toString());
      this.subejectModel.combination = classId + "_" + subjectId;

      let index = this.selectedSubjectList.indexOf(this.subejectModel)
      this.selectedSubjectList.splice(index, 1);
      //alert(Object.keys(this.selectedPackageList).length)
    }
    //console.log(JSON.stringify(this.selectedSubjectList))
  }

  checkAll(ev) {
    console.log(JSON.stringify(ev));
    //this.subjectData.forEach(x => x.state = ev.target.checked)
  }

  saveMapping() {

    this.subjectService.addSubjectMapping(this.selectedSubjectList).subscribe(res => {
      if (res.isError === false) {
        swal({
          title: 'Success!',
          text: 'Mapping successfully saved!',
          type: 'success'
        }).catch(swal.noop);
      }
      else {
        swal({
          title: 'Error!',
          text: res.message,
          type: 'warning'
        }).catch(swal.noop);
      }
    })
  }

}

