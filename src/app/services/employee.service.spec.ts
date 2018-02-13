import { TestBed, inject } from '@angular/core/testing';
import {HttpModule} from '@angular/http';
import { EmployeeService } from './employee.service';
import { Employee } from '../employee/employee.component.ts/employee.component';

describe('EmployeeService', () => {

   var employees ;/* =  [ 
     {
      "userId":"rirani",
      "jobTitleName":"SystemAnalyst",
      "firstName":"Romin",
      "lastName":"Irani",
      "currentAge": 25,
      "DOJ": "12-Jan-2016",
      "permanentAddress":
      {			
          "streetAddress": "21 2nd Street",
          "city": "New York",
          "state": "NY",
          "postalCode": "10021"
      },			
      "preferredFullName":"Romin Irani",
      "employeeCode":"E1",
      "region":"CA",
      "phoneNumber":"408-0000000",
      "currentProject": "Mercury",
      "emailAddress":"romin.k.irani@gmail.com"
    },
    {
      "userId":"nirani",
      "jobTitleName":"SystemAnalyst",
      "firstName":"Neil",
      "lastName":"Irani",
      "currentAge": 26,
      "DOJ": "12-Feb-2016",
      "permanentAddress":
      {			
          "streetAddress": "21 2nd Street",
          "city": "New York",
          "state": "NY",
          "postalCode": "10021"
      },
      "preferredFullName":"Neil Irani",
      "employeeCode":"E2",
      "region":"CA",
      "phoneNumber":"408-1111111",
      "currentProject": "Mercury",
      "emailAddress":"neilrirani@gmail.com"
    }
  ];*/

  var empCount ;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpModule],
      providers: [EmployeeService]
    });
  });

  it('should return employees data', inject([EmployeeService], (service: EmployeeService) => {

    employees = service.getEmployee();
    expect(employees !=  null).toBeTruthy();
  }));

  it('should return employees count based on region', inject([EmployeeService], (service: EmployeeService) => {
    empCount = service.getEmployeeCount(employees,'region');
    expect( empCount !=  null).toBeTruthy();
  }));

  it('should return bar chart data object based on the field specified', inject([EmployeeService], (service: EmployeeService) => {
    expect(!service.getBarChartData(empCount)).toBeTruthy();
  }));

  it('should return bar chart labels based on the field specified', inject([EmployeeService], (service: EmployeeService) => {
    expect(service.getBarChartLabels(empCount) !=  null).toBeTruthy();
  }));

  it('should return bar chart options based on the field specified', inject([EmployeeService], (service: EmployeeService) => {
    expect(service.getBarChartOptions('region') !=  null).toBeTruthy();
  }));

  it('should return bar', inject([EmployeeService], (service: EmployeeService) => {
    expect(service.getChartType() ===  'bar').toBeTruthy();
  }));

  it('should return true', inject([EmployeeService], (service: EmployeeService) => {
    expect(service.getBarChartLegend() ===  true).toBeTruthy();
  }));


});
