import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectClassMappingComponent } from './subject-class-mapping.component';

describe('SubjectClassMappingComponent', () => {
  let component: SubjectClassMappingComponent;
  let fixture: ComponentFixture<SubjectClassMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubjectClassMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectClassMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
