import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  Load : boolean = false;

  constructor(private router : Router,private empService : EmployeeService) { }

  ngOnInit() {
  }

  isLoadMore(){
    this.Load = true;
  }

  onEnLarge(type:string){
    if(type.toLowerCase() == 'dev'){
      this.router.navigate(['/dashboard/devEmpByProjects']);
    }
    else if(type.toLowerCase() == 'age'){
      this.router.navigate(['/dashboard/empByAge']);
    }
    else if(type.toLowerCase() == 'addr'){
      this.router.navigate(['/dashboard/empByAddress']);
    }
    else if(type.toLowerCase() == 'joindate'){
      this.router.navigate(['/dashboard/empByJoinDate']);
    }
    else if(type.toLowerCase() == 'compjoindate'){
      this.router.navigate(['/dashboard/empAtStart']);
    }
    else if(type.toLowerCase() == 'region'){
      this.router.navigate(['/dashboard/empByRegion']);
    }
    else if(type.toLowerCase() == 'title'){
      this.router.navigate(['/dashboard/empByTitle']);
    }
    this.empService.isEnlarged = true;
  }

}
