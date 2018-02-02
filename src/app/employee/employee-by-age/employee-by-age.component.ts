import { Component, OnInit,OnDestroy } from '@angular/core';
import {Employee} from "../employee.component.ts/employee.component";
import {EmployeeService} from "../../services/employee.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-by-age',
  templateUrl: './employee-by-age.component.html',
  styleUrls: ['./employee-by-age.component.css']
})
export class EmployeeByAgeComponent implements OnInit,OnDestroy {

  employees : Employee[];
  errorMessage : String;
  employeeCountByAge : any[];
  data :any[] = [];
  interval : any;

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
       this.employeeCountByAge = this.getEmployeeCountByAge(this.employees);
       this.barChartData = this._employeeService.getBarChartData(this.employeeCountByAge);
       this.barChartLabels = this._employeeService.getBarChartLabels(this.employeeCountByAge);
     },
     (error) => {
       this.errorMessage = 'Problem with the service..Please try again later.'
    });
   }

   ngOnDestroy() {
    clearInterval(this.interval);
   }
  
    getEmployeeCountByAge(employees : Employee[]){
        
       let empAges = [];
       let empCountByAge : any = [];
       let empCount : any = [];
      for(let i=0;i<employees.length;i++){
          empAges.push(employees[i].currentAge);
      }
     let empAgesWithoutDups = Array.from(new Set(empAges));
     for(let i=0;i<empAgesWithoutDups.length;i++){
         const result = empAges.filter(k => k=== empAgesWithoutDups[i]).length;    
      if(employees[i].currentAge >=20 && employees[i].currentAge<30){
          if(!empCount["20-29"])
          empCount["20-29"] = result;
          else
          empCount["20-29"] += result;
      }
      else if(employees[i].currentAge >=30 && employees[i].currentAge<40){
          if(!empCount["30-39"])
          empCount["30-39"] = result;
          else
          empCount["30-39"] += result;
      }
      else if(employees[i].currentAge >=40 && employees[i].currentAge<50){
          if(!empCount["40-49"])
          empCount["40-49"] = result;
          else
          empCount["40-49"] += result;
      }
      else if(employees[i].currentAge >=50 && employees[i].currentAge<60){
          if(!empCount["50-59"])
          empCount["50-59"] = result;
          else
          empCount["50-59"] += result;
      }
      else if(employees[i].currentAge >=60){
          if(!empCount[">60"])
          empCount[">60"] = result;
          else
          empCount[">60"] += result;
      }
      else{
          if(!empCount["UnderAge"])
          empCount["20-29"] = result;
          else
          empCount["20-29"] += result;
      }
    }
    for(let index in empCount){
      var a = <obj> {};
      a.value = index;
      a.count = empCount[index];
      empCountByAge.push(a);
    }
    return empCountByAge;
  }

  onClose(){
    this._employeeService.isEnlarged = false;
    this.router.navigate(['dashboard']);
  }

  public barChartLabels:string[] ;
  public barChartOptions = this._employeeService.getBarChartOptions('age');
  public barChartType:string = this._employeeService.getChartType();
  public barChartLegend:boolean = this._employeeService.getBarChartLegend();
  public barChartData:any[] ;  

}

class obj{
  value : string;
  count : number;
}