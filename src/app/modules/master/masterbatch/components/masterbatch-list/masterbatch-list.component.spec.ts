import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterbatchListComponent } from './masterbatch-list.component';

describe('MasterbatchListComponent', () => {
  let component: MasterbatchListComponent;
  let fixture: ComponentFixture<MasterbatchListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterbatchListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterbatchListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
