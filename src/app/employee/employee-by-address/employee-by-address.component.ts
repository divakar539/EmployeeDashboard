import { Component, OnInit,OnDestroy } from '@angular/core';
import {Employee} from "../employee.component.ts/employee.component";
import {EmployeeService} from "../../services/employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-by-address',
  templateUrl: './employee-by-address.component.html',
  styleUrls: ['./employee-by-address.component.css']
})
export class EmployeeByAddressComponent implements OnInit,OnDestroy {

  employees : Employee[];
  errorMessage : String;
  employeeCountByState : any[];
  data : any[] = [];
  interval : any;

  constructor(private _employeeService : EmployeeService,private router: Router){}
  
   ngOnInit(){
    this.refreshData();
    this.interval = setInterval(() => { 
     this.refreshData(); 
     }, 5000);
   }

   refreshData(){
    this._employeeService.getEmployee().subscribe(employees => {
      this.employees = employees.Employees;
      this.employeeCountByState = this._employeeService.getEmployeeCount(this.employees,'address');  
      this.barChartData = this._employeeService.getBarChartData(this.employeeCountByState);
       this.barChartLabels = this._employeeService.getBarChartLabels(this.employeeCountByState);
     },
     (error) => {
      this.errorMessage = 'Problem with the service..Please try again later.'
     });
   }

   ngOnDestroy() {
    clearInterval(this.interval);
   }

   onClose(){
    this._employeeService.isEnlarged = false;
    this.router.navigate(['dashboard']);
  }

  public barChartOptions = this._employeeService.getBarChartOptions('state');
  public barChartLabels:string[] = [] ;
  public barChartType:string = this._employeeService.getChartType();
  public barChartLegend:boolean = this._employeeService.getBarChartLegend();
  public barChartData:any[] ;  
    }

