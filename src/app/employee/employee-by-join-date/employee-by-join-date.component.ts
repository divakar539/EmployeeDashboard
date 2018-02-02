import { Component, OnInit,OnDestroy } from '@angular/core';
import {Employee} from "../employee.component.ts/employee.component";
import {EmployeeService} from "../../services/employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-by-join-date',
  templateUrl: './employee-by-join-date.component.html',
  styleUrls: ['./employee-by-join-date.component.css']
})
export class EmployeeByJoinDateComponent implements OnInit,OnDestroy {

  employees : Employee[];
  errorMessage : String;
  employeeCountByJoinDate : any[];
  data : any[] =[];
  interval :any;

  constructor(private _employeeService : EmployeeService,private router : Router){}
  
   ngOnInit(){
    this.refreshData();
    this.interval = setInterval(() => { 
     this.refreshData(); 
     }, 5000);
   }

   onClose(){
    this._employeeService.isEnlarged = false;
    this.router.navigate(['dashboard']);
  }

   refreshData(){
    this._employeeService.getEmployee().subscribe(employees => {
      this.employees = employees.Employees;
      this.employeeCountByJoinDate = this._employeeService.getEmployeeCount(this.employees,'joindate');
      this.barChartData = this._employeeService.getBarChartData(this.employeeCountByJoinDate);
      this.barChartLabels = this._employeeService.getBarChartLabels(this.employeeCountByJoinDate);
    },
    (error) => {
     this.errorMessage = 'Problem with the service..Please try again later.'
    });
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  public barChartOptions = this._employeeService.getBarChartOptions('month');
  public barChartLabels:string[] = [] ;
  public barChartType:string = this._employeeService.getChartType();
  public barChartLegend:boolean = this._employeeService.getBarChartLegend();
  public barChartData:any[] ; 
}