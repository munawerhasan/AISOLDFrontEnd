import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterbatchUpdateComponent } from './masterbatch-update.component';

describe('MasterbatchUpdateComponent', () => {
  let component: MasterbatchUpdateComponent;
  let fixture: ComponentFixture<MasterbatchUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterbatchUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterbatchUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
