import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterleaveAddComponent } from './masterleave-add.component';

describe('MasterleaveAddComponent', () => {
  let component: MasterleaveAddComponent;
  let fixture: ComponentFixture<MasterleaveAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterleaveAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterleaveAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
