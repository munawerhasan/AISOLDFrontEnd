import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterwingListComponent } from './masterwing-list.component';

describe('MasterwingListComponent', () => {
  let component: MasterwingListComponent;
  let fixture: ComponentFixture<MasterwingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterwingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterwingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
