import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasteroccupationAddComponent } from './masteroccupation-add.component';

describe('MasteroccupationAddComponent', () => {
  let component: MasteroccupationAddComponent;
  let fixture: ComponentFixture<MasteroccupationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasteroccupationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasteroccupationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
