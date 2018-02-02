import { Component, OnInit,OnDestroy } from '@angular/core';
import {Employee} from "../employee.component.ts/employee.component";
import {EmployeeService} from "../../services/employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-by-title',
  templateUrl: './employee-by-title.component.html',
  styleUrls: ['./employee-by-title.component.css']
})
export class EmployeeByTitleComponent implements OnInit,OnDestroy {

  employees : Employee[];
  errorMessage : String;
  employeeCountByTitle : any[];
  data : any[] =[];
  interval : any;

  constructor(private _employeeService : EmployeeService,private router : Router){}
  
   ngOnInit(){
    this.refreshData();
    this.interval = setInterval(() => { 
     this.refreshData(); 
     }, 5000)         
   }

   onClose(){
    this._employeeService.isEnlarged = false;
    this.router.navigate(['dashboard']);
  }

   refreshData(){

    this._employeeService.getEmployee().subscribe(employees => {
      this.employees = employees.Employees;
      this.employeeCountByTitle = this._employeeService.getEmployeeCount(this.employees,'jobTitleName');
      this.barChartData = this._employeeService.getBarChartData(this.employeeCountByTitle);
      this.barChartLabels = this._employeeService.getBarChartLabels(this.employeeCountByTitle);
    },
    (error) => {
      this.errorMessage = 'Problem with the service..Please try again later.'
    });
   }

   ngOnDestroy() {
    clearInterval(this.interval);
   }

   public barChartOptions = this._employeeService.getBarChartOptions('title');
   public barChartLabels:string[] = [];
   public barChartType:string = this._employeeService.getChartType();
   public barChartLegend:boolean = this._employeeService.getBarChartLegend();
   public barChartData:any[] ;   
}
