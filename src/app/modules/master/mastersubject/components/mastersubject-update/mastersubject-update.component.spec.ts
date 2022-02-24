import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersubjectUpdateComponent } from './mastersubject-update.component';

describe('MastersubjectUpdateComponent', () => {
  let component: MastersubjectUpdateComponent;
  let fixture: ComponentFixture<MastersubjectUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersubjectUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersubjectUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
