import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByCompanyJoinDateComponent } from './employee-by-company-join-date.component';

describe('EmployeeByCompanyJoinDateComponent', () => {
  let component: EmployeeByCompanyJoinDateComponent;
  let fixture: ComponentFixture<EmployeeByCompanyJoinDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByCompanyJoinDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByCompanyJoinDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
