import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdocumentListComponent } from './masterdocument-list.component';

describe('MasterdocumentListComponent', () => {
  let component: MasterdocumentListComponent;
  let fixture: ComponentFixture<MasterdocumentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdocumentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdocumentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
