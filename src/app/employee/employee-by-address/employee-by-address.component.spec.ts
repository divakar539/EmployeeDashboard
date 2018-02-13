import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByAddressComponent } from './employee-by-address.component';
import { ChartsModule } from 'ng2-charts';
import { EmployeeService } from '../../services/employee.service';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeByAddressComponent', () => {
  let component: EmployeeByAddressComponent;
  let fixture: ComponentFixture<EmployeeByAddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByAddressComponent ],
      imports : [ChartsModule,HttpModule,RouterTestingModule],
      providers : [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByAddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Employee By Address Component', () => {
    expect(component).toBeTruthy();
    expect(component.barChartData != null).toBeFalsy();
  });
});
