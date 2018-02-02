import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByJoinDateComponent } from './employee-by-join-date.component';

describe('EmployeeByJoinDateComponent', () => {
  let component: EmployeeByJoinDateComponent;
  let fixture: ComponentFixture<EmployeeByJoinDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByJoinDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByJoinDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
