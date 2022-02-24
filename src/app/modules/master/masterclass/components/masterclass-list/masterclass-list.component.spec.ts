import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterclassListComponent } from './masterclass-list.component';

describe('MasterclassListComponent', () => {
  let component: MasterclassListComponent;
  let fixture: ComponentFixture<MasterclassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterclassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterclassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
