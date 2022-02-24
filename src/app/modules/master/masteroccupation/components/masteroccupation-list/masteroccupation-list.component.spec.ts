import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteroccupationListComponent } from './masteroccupation-list.component';

describe('MasteroccupationListComponent', () => {
  let component: MasteroccupationListComponent;
  let fixture: ComponentFixture<MasteroccupationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasteroccupationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteroccupationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
