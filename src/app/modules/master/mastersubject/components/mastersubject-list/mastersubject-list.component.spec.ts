import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersubjectListComponent } from './mastersubject-list.component';

describe('MastersubjectListComponent', () => {
  let component: MastersubjectListComponent;
  let fixture: ComponentFixture<MastersubjectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersubjectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersubjectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
