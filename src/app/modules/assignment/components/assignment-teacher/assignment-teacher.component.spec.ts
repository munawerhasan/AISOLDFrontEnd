import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentTeacherComponent } from './assignment-teacher.component';

describe('AssignmentTeacherComponent', () => {
  let component: AssignmentTeacherComponent;
  let fixture: ComponentFixture<AssignmentTeacherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentTeacherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
