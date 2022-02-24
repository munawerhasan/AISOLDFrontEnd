import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdepartmentAddComponent } from './masterdepartment-add.component';

describe('MasterdepartmentAddComponent', () => {
  let component: MasterdepartmentAddComponent;
  let fixture: ComponentFixture<MasterdepartmentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdepartmentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdepartmentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
