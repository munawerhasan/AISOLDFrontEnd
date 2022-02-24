import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteremployeeUpdateComponent } from './masteremployee-update.component';

describe('MasteremployeeUpdateComponent', () => {
  let component: MasteremployeeUpdateComponent;
  let fixture: ComponentFixture<MasteremployeeUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasteremployeeUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteremployeeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
