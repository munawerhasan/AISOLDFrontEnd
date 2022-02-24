import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdocumentUpdateComponent } from './masterdocument-update.component';

describe('MasterdocumentUpdateComponent', () => {
  let component: MasterdocumentUpdateComponent;
  let fixture: ComponentFixture<MasterdocumentUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdocumentUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdocumentUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
