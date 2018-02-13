import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByCompanyJoinDateComponent } from './employee-by-company-join-date.component';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../../services/employee.service';

describe('EmployeeByCompanyJoinDateComponent', () => {
  let component: EmployeeByCompanyJoinDateComponent;
  let fixture: ComponentFixture<EmployeeByCompanyJoinDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByCompanyJoinDateComponent ],
      imports : [ChartsModule,HttpModule,RouterTestingModule],
      providers : [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByCompanyJoinDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Employee By Join Date Component', () => {
    expect(component).toBeTruthy();
  });
});
