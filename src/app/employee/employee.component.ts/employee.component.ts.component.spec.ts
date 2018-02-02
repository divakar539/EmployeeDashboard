import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee } from './employee.component';

describe('Employee.Component.TsComponent', () => {
  let component: Employee;
  let fixture: ComponentFixture<Employee>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Employee ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Employee);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
