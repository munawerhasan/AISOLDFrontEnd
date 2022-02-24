import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterclassAddComponent } from './masterclass-add.component';

describe('MasterclassAddComponent', () => {
  let component: MasterclassAddComponent;
  let fixture: ComponentFixture<MasterclassAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterclassAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterclassAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
