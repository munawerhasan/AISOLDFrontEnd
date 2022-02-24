import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAssignmentActivityComponent } from './user-assignment-activity.component';

describe('UserAssignmentActivityComponent', () => {
  let component: UserAssignmentActivityComponent;
  let fixture: ComponentFixture<UserAssignmentActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAssignmentActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAssignmentActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
