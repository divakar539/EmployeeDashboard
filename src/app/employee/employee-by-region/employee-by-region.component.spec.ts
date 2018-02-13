import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByRegionComponent } from './employee-by-region.component';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../../services/employee.service';

describe('EmployeeByRegionComponent', () => {
  let component: EmployeeByRegionComponent;
  let fixture: ComponentFixture<EmployeeByRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByRegionComponent ],
      imports : [ChartsModule,HttpModule,RouterTestingModule],
      providers : [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Employee By Region Component', () => {
    expect(component).toBeTruthy();
  });
});
