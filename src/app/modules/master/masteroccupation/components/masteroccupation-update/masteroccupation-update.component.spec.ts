import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteroccupationUpdateComponent } from './masteroccupation-update.component';

describe('MasteroccupationUpdateComponent', () => {
  let component: MasteroccupationUpdateComponent;
  let fixture: ComponentFixture<MasteroccupationUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasteroccupationUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteroccupationUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
