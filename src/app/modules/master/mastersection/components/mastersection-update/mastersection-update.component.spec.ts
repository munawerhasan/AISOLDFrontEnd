import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersectionUpdateComponent } from './mastersection-update.component';

describe('MastersectionUpdateComponent', () => {
  let component: MastersectionUpdateComponent;
  let fixture: ComponentFixture<MastersectionUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersectionUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersectionUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
