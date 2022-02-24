import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteremployeeAddComponent } from './masteremployee-add.component';

describe('MasteremployeeAddComponent', () => {
  let component: MasteremployeeAddComponent;
  let fixture: ComponentFixture<MasteremployeeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasteremployeeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteremployeeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
