import { Component, OnInit,OnDestroy } from '@angular/core';
import {Employee} from "../employee.component.ts/employee.component";
import {EmployeeService} from "../../services/employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-by-company-join-date',
  templateUrl: './employee-by-company-join-date.component.html',
  styleUrls: ['./employee-by-company-join-date.component.css']
})
export class EmployeeByCompanyJoinDateComponent implements OnInit,OnDestroy {

  employees : Employee[];
  errorMessage : String;
  employeeCountByCompanyJoinDate : any[];
  data : any[] = [];
  interval : any;

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
      this.employeeCountByCompanyJoinDate = this.getEmployeeCountByCompJoinDate(this.employees);
      this.barChartData = this._employeeService.getBarChartData(this.employeeCountByCompanyJoinDate);
      this.barChartLabels = this._employeeService.getBarChartLabels(this.employeeCountByCompanyJoinDate);
     },
     (error) => {
      this.errorMessage = 'Problem with the service..Please try again later.'
     });
   }

   ngOnDestroy() {
    clearInterval(this.interval);
   }

    getEmployeeCountByCompJoinDate(employees : Employee[]){
        
       let totalNames = [];
       let empCountByDOJ = [];
      for(let i=0;i<employees.length;i++){
          totalNames.push(employees[i].DOJ);
      }
      let monthNames = Array.from(new Set(totalNames));
      let min = monthNames[0];
      for(let i=0;i<monthNames.length;i++){
          if (new Date(<string>monthNames[i]) < new Date(<string>min)) {
              min = monthNames[i];
          }
          }
          var result = totalNames.filter(k => k == min ).length;
          var a ={
            value : min,
            count : result
          };
          var b = {
            value : 'otherDate',
            count : employees.length-result
          };
          empCountByDOJ.push(a);
          empCountByDOJ.push(b);
          console.log(empCountByDOJ);
          return empCountByDOJ;
      }
      public barChartOptions = this._employeeService.getBarChartOptions('date');
      public barChartLabels:string[] = [] ;
      public barChartType:string = this._employeeService.getChartType();
      public barChartLegend:boolean = this._employeeService.getBarChartLegend();
      public barChartData:any[] ;
      
    }
  
