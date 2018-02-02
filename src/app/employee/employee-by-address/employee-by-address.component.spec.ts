import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByAddressComponent } from './employee-by-address.component';

describe('EmployeeByAddressComponent', () => {
  let component: EmployeeByAddressComponent;
  let fixture: ComponentFixture<EmployeeByAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByAddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
