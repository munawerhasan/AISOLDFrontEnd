import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentStudentComponent } from './assignment-student.component';

describe('AssignmentStudentComponent', () => {
  let component: AssignmentStudentComponent;
  let fixture: ComponentFixture<AssignmentStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
