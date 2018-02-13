import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Http} from '@angular/http';
import { EmployeeService } from '../services/employee.service';
import { DashboardComponent } from './dashboard.component';
import { DevEmployeeByProjectComponent } from '../Employee/dev-employee-by-project/dev-employee-by-project.component';
import { EmployeeByAddressComponent } from '../employee/employee-by-address/employee-by-address.component';
import { EmployeeByAgeComponent } from '../employee/employee-by-age/employee-by-age.component';
import { EmployeeByCompanyJoinDateComponent } from '../employee/employee-by-company-join-date/employee-by-company-join-date.component';
import { EmployeeByJoinDateComponent } from '../employee/employee-by-join-date/employee-by-join-date.component';
import { EmployeeByRegionComponent } from '../employee/employee-by-region/employee-by-region.component';
import { EmployeeByTitleComponent } from '../employee/employee-by-title/employee-by-title.component';
import { ChartsModule } from 'ng2-charts';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common'
import { HttpModule } from '@angular/http/';


describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      imports : [ChartsModule,RouterTestingModule,HttpModule],
      declarations: [ DashboardComponent,DevEmployeeByProjectComponent,
                      EmployeeByAddressComponent,EmployeeByAgeComponent,
                      EmployeeByCompanyJoinDateComponent,EmployeeByJoinDateComponent,
                      EmployeeByRegionComponent,EmployeeByTitleComponent ],
      providers : [EmployeeService,{provide: Router, useClass: RouterTestingModule },{provide: APP_BASE_HREF, useValue : '/' }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Dashboard Component', () => {
    expect(component).toBeTruthy();
  });
});
