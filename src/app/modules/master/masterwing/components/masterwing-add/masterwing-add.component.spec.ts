import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterwingAddComponent } from './masterwing-add.component';

describe('MasterwingAddComponent', () => {
  let component: MasterwingAddComponent;
  let fixture: ComponentFixture<MasterwingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterwingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterwingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
