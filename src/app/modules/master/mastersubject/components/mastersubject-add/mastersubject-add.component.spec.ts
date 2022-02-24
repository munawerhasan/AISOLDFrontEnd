import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersubjectAddComponent } from './mastersubject-add.component';

describe('MastersubjectAddComponent', () => {
  let component: MastersubjectAddComponent;
  let fixture: ComponentFixture<MastersubjectAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersubjectAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersubjectAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
