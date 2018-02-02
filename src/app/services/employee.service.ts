import {Injectable} from "@angular/core";
import {Employee} from "../employee/employee.component.ts/employee.component";
import {Http,Response} from "@angular/http"
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

@Injectable()
export class EmployeeService{

    isEnlarged : boolean;
    
    constructor(private http:Http) {
        
    }

    getEmployee() :Observable<any>{

       return  this.http.get('/assets/data/employee.json')
               .map((response : Response) => response.json())
               .catch(this.handleError);
        
    }

    getEmployeeCount(employees : Employee[],field : any){
        
       let fieldNames = [];
       let empCount : any  = [];
      for(let i=0;i<employees.length;i++){
        if(field =='jobTitleName')
        fieldNames.push(employees[i].jobTitleName);
        else if(field == 'region')
        fieldNames.push(employees[i].region);
        else if(field == 'address')
        fieldNames.push(employees[i].permanentAddress.state);
        else if(field == 'joindate')
        fieldNames.push(employees[i].DOJ.substr(3,3).toLowerCase());
        else if(field == 'developer'){
            if(employees[i].jobTitleName.toLowerCase() == 'developer' && employees[i].currentProject)
            fieldNames.push(employees[i].currentProject);
        }
      }
      let fieldNamesWithoutDups = Array.from(new Set(fieldNames));
      for(let i=0;i<fieldNamesWithoutDups.length;i++){
        if(field == 'joindate'){
            var result = fieldNames.filter(k => k.toLowerCase() === fieldNamesWithoutDups[i]).length;
        }else{
            var result = fieldNames.filter(k => k=== fieldNamesWithoutDups[i]).length;
        }
              var a = <obj>{} ;
              a.value = fieldNamesWithoutDups[i];
              a.count = result;
              empCount.push(a);
          }
          return empCount;
      }

      getBarChartData(employeeCount : obj[]){
          let data : any[] = [];
          let barChartData : any[];
          for(let i=0;i<employeeCount.length;i++){
            data[i] = employeeCount[i].count;
            barChartData = [{data : data,label :'Employee'}];
          }
          return barChartData;
      }

      getBarChartLabels(employeeCount : obj[]){
        let barChartLabel : any[] = [];
        for(let i=0;i<employeeCount.length;i++){
            barChartLabel[i] = employeeCount[i].value;
        }
        return barChartLabel;
      }

     handleError(error : Response){
      console.error(error);
      return Observable.throw(error);
     }

     getBarChartOptions(field:any){
        let barChartOptions:any = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
              xAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'labelName'
                }
              }],
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'EmployeeCount'
                }
              }]
            }
          };
          if(field == 'region')
          barChartOptions.scales.xAxes[0].scaleLabel.labelString = 'Regions';
          else if(field == 'title')
          barChartOptions.scales.xAxes[0].scaleLabel.labelString = 'Roles';
          else if(field == 'age')
          barChartOptions.scales.xAxes[0].scaleLabel.labelString = 'Ages';
          else if(field == 'project')
          barChartOptions.scales.xAxes[0].scaleLabel.labelString = 'Projects';
          else if(field == 'month')
          barChartOptions.scales.xAxes[0].scaleLabel.labelString = 'Months';
          else if(field == 'date')
          barChartOptions.scales.xAxes[0].scaleLabel.labelString = 'Date';
          else if(field == 'state')
          barChartOptions.scales.xAxes[0].scaleLabel.labelString = 'States';

          return barChartOptions;
      } 

        getChartType():string{
            return 'bar';
        }
        
        getBarChartLegend() : boolean{
            return true;
        }
    }

class obj{
 value : string;
 count : number;
}