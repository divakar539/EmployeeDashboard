import { Component, OnInit ,OnDestroy } from '@angular/core';
import {Employee} from "../employee.component.ts/employee.component";
import {EmployeeService} from "../../services/employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-by-region',
  templateUrl: './employee-by-region.component.html',
  styleUrls: ['./employee-by-region.component.css']
})
export class EmployeeByRegionComponent implements OnInit,OnDestroy {

  employees : Employee[];
  errorMessage : String;
  employeeCount : Number;
  employeeCountByRegion : any[];
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
    this.employeeCountByRegion =  this._employeeService.getEmployeeCount(this.employees,'region');
    this.barChartLabels = this._employeeService.getBarChartLabels(this.employeeCountByRegion);
    this.barChartData = this._employeeService.getBarChartData(this.employeeCountByRegion);
  },
  (error) => {
   this.errorMessage = 'Problem with the service..Please try again later.'
   });
 }
 
 ngOnDestroy() {
  clearInterval(this.interval);
 }

 public barChartOptions = this._employeeService.getBarChartOptions('region');
 public barChartLabels:string[] = [] ;
 public barChartType:string = this._employeeService.getChartType();
 public barChartLegend:boolean = this._employeeService.getBarChartLegend();
 public barChartData:any[] ;
}

