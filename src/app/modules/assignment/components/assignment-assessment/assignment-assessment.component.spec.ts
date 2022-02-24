import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentAssessmentComponent } from './assignment-assessment.component';

describe('AssignmentAssessmentComponent', () => {
  let component: AssignmentAssessmentComponent;
  let fixture: ComponentFixture<AssignmentAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
