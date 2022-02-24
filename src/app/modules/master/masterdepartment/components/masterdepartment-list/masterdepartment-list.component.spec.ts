import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdepartmentListComponent } from './masterdepartment-list.component';

describe('MasterdepartmentListComponent', () => {
  let component: MasterdepartmentListComponent;
  let fixture: ComponentFixture<MasterdepartmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdepartmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdepartmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
