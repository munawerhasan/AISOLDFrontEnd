import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterdocumentAddComponent } from './masterdocument-add.component';

describe('MasterdocumentAddComponent', () => {
  let component: MasterdocumentAddComponent;
  let fixture: ComponentFixture<MasterdocumentAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterdocumentAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterdocumentAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
