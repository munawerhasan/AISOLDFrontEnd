import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteremployeeListComponent } from './masteremployee-list.component';

describe('MasteremployeeListComponent', () => {
  let component: MasteremployeeListComponent;
  let fixture: ComponentFixture<MasteremployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasteremployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteremployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
