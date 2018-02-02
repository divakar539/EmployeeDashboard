import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByAgeComponent } from './employee-by-age.component';

describe('EmployeeByAgeComponent', () => {
  let component: EmployeeByAgeComponent;
  let fixture: ComponentFixture<EmployeeByAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
