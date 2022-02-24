import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdepartmentUpdateComponent } from './masterdepartment-update.component';

describe('MasterdepartmentUpdateComponent', () => {
  let component: MasterdepartmentUpdateComponent;
  let fixture: ComponentFixture<MasterdepartmentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdepartmentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdepartmentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
