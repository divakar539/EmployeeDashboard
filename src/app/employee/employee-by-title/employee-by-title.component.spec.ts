import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeByTitleComponent } from './employee-by-title.component';
import { ChartsModule } from 'ng2-charts';
import { HttpModule } from '@angular/http';
import { RouterTestingModule } from '@angular/router/testing';
import { EmployeeService } from '../../services/employee.service';

describe('EmployeeByTitleComponent', () => {
  let component: EmployeeByTitleComponent;
  let fixture: ComponentFixture<EmployeeByTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeByTitleComponent ],
      imports : [ChartsModule,HttpModule,RouterTestingModule],
      providers : [EmployeeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeByTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Employee By Title Component', () => {
    expect(component).toBeTruthy();
  });
});
