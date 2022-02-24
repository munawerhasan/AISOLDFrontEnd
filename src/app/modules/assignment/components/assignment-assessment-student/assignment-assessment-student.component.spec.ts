import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentAssessmentStudentComponent } from './assignment-assessment-student.component';

describe('AssignmentAssessmentStudentComponent', () => {
  let component: AssignmentAssessmentStudentComponent;
  let fixture: ComponentFixture<AssignmentAssessmentStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentAssessmentStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentAssessmentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
