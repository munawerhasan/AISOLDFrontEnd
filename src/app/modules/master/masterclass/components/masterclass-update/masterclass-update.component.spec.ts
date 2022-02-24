import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterclassUpdateComponent } from './masterclass-update.component';

describe('MasterclassUpdateComponent', () => {
  let component: MasterclassUpdateComponent;
  let fixture: ComponentFixture<MasterclassUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterclassUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterclassUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
