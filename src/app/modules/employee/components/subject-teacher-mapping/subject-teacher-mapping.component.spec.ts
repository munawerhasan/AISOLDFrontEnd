import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectTeacherMappingComponent } from './subject-teacher-mapping.component';

describe('SubjectTeacherMappingComponent', () => {
  let component: SubjectTeacherMappingComponent;
  let fixture: ComponentFixture<SubjectTeacherMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectTeacherMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectTeacherMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
