import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterleaveUpdateComponent } from './masterleave-update.component';

describe('MasterleaveUpdateComponent', () => {
  let component: MasterleaveUpdateComponent;
  let fixture: ComponentFixture<MasterleaveUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterleaveUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterleaveUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
