import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterbatchAddComponent } from './masterbatch-add.component';

describe('MasterbatchAddComponent', () => {
  let component: MasterbatchAddComponent;
  let fixture: ComponentFixture<MasterbatchAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterbatchAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterbatchAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
