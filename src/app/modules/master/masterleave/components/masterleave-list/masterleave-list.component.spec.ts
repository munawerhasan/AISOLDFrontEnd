import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterleaveListComponent } from './masterleave-list.component';

describe('MasterleaveListComponent', () => {
  let component: MasterleaveListComponent;
  let fixture: ComponentFixture<MasterleaveListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterleaveListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterleaveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
