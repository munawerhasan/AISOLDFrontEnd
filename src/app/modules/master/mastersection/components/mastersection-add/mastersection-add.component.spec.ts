import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MastersectionAddComponent } from './mastersection-add.component';

describe('MastersectionAddComponent', () => {
  let component: MastersectionAddComponent;
  let fixture: ComponentFixture<MastersectionAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MastersectionAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MastersectionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
