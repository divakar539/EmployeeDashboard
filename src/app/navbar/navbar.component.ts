import { Component, OnInit } from '@angular/core';
import {AuthenticateService} from "../services/authenticate.service";
import { Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee/employee.component.ts/employee.component';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  date = new Date();
  employees : Employee[];
  employeeCount : number;
  constructor(private _authenticateService : AuthenticateService,private router : Router,private _employeeService : EmployeeService,private flashMessage : FlashMessagesService) {
    
   }

  ngOnInit() {
    this._employeeService.getEmployee().subscribe(employees => {
      this.employees = employees.Employees;
      this.employeeCount = this.employees.length;
    })
  }

  onLogout(){
    this.flashMessage.show("You've successfully logged out" , {
      cssClass : 'alert-success',
      timeout : 5000
    });
    this.router.navigate(['/login']);
  }
}
