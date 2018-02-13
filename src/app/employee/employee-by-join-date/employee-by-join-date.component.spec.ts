import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByJoinDateComponent } from './employee-by-join-date.component';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../../services/employee.service';

describe('EmployeeByJoinDateComponent', () => {
  let component: EmployeeByJoinDateComponent;
  let fixture: ComponentFixture<EmployeeByJoinDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByJoinDateComponent ],
      imports : [ChartsModule,HttpModule,RouterTestingModule],
      providers : [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByJoinDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Employee By Join Date Component', () => {
    expect(component).toBeTruthy();
  });
});
