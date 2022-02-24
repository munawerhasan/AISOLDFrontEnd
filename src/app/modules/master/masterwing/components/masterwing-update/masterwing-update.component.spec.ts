import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterwingUpdateComponent } from './masterwing-update.component';

describe('MasterwingUpdateComponent', () => {
  let component: MasterwingUpdateComponent;
  let fixture: ComponentFixture<MasterwingUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterwingUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterwingUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
