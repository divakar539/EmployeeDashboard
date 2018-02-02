import { Component, OnInit, OnDestroy } from '@angular/core';
import {Employee} from "../employee.component.ts/employee.component";
import {EmployeeService} from "../../services/employee.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-dev-employee-by-project',
  templateUrl: './dev-employee-by-project.component.html',
  styleUrls: ['./dev-employee-by-project.component.css']
})
export class DevEmployeeByProjectComponent implements OnInit, OnDestroy {

  employees : Employee[];
  errorMessage : String;
  devEmployeeCountByProject : any[];
  data :any[] = [];
  interval :any;
  constructor(private _employeeService : EmployeeService,private router : Router){}
  
   ngOnInit(){
     this.refreshData();
     this.interval = setInterval(() => { 
      this.refreshData(); 
     }, 5000);
   }

   refreshData(){
      this._employeeService.getEmployee().subscribe(employees => {
      this.employees = employees.Employees;
      this.devEmployeeCountByProject = this._employeeService.getEmployeeCount(this.employees,'developer');
      this.devEmployeeCountByProject.push(this.getFreeDevEmployeeCount(this.employees));
      this.barChartData = this._employeeService.getBarChartData(this.devEmployeeCountByProject);
      this.barChartLabels = this._employeeService.getBarChartLabels(this.devEmployeeCountByProject);
      },
      (error) => {
       this.errorMessage = 'Problem with the service..Please try again later.'
      });
    }

    ngOnDestroy() {
      clearInterval(this.interval);
    }
  
    getFreeDevEmployeeCount(employees : Employee[]){

       let totalProjects = [];
       let DevEmpCountByProjects = [];
       let count = 0;
      for(let i=0;i<employees.length;i++){
          if(employees[i].jobTitleName.toLowerCase() == 'developer' && !employees[i].currentProject){
              count++;
          }   
      }
      if(count > 0){
          var a = {
            value : 'No Projects',
            count : count
          } ;
      }
          return a ;
      }

      onClose(){
        this._employeeService.isEnlarged = false;
        this.router.navigate(['dashboard']);
      }
      public barChartOptions = this._employeeService.getBarChartOptions('project');
      public barChartLabels:string[] = [] ;
      public barChartType:string = this._employeeService.getChartType();
      public barChartLegend:boolean = this._employeeService.getBarChartLegend();
      public barChartData:any[] ;   
}