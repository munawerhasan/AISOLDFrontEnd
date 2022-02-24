import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersectionListComponent } from './mastersection-list.component';

describe('MastersectionListComponent', () => {
  let component: MastersectionListComponent;
  let fixture: ComponentFixture<MastersectionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersectionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersectionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
