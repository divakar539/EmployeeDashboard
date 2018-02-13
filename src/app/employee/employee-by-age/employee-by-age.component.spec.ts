import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByAgeComponent } from './employee-by-age.component';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../../services/employee.service';

describe('EmployeeByAgeComponent', () => {
  let component: EmployeeByAgeComponent;
  let fixture: ComponentFixture<EmployeeByAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByAgeComponent ],
      imports : [ChartsModule,HttpModule,RouterTestingModule],
      providers : [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Employee By Age Component', () => {
    expect(component).toBeTruthy();
  });
});
