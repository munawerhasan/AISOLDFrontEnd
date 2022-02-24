import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
export class ClassModel {

    classId: number;
    schoolId: number;
    financialYear: string;
    masterBatchId: number;
    masterClassId: number;
    masterSectionId: number;
    assessmentMode: number;
    startDate: NgbDateStruct;
    endDate: NgbDateStruct;
    stength: number;
    iCardGroupId: number;
    houseId: number;
    feeId: number;
    displayOrder: number;
    activeStatus: number;
    createdByUserId: number;
    updatedByUserId: number;
    createdDate: Date;
    updatedDate: Date;

    batchName: string;
    className: string;
    classCode: string;
    sectionName: string;

}