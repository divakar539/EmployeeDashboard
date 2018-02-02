import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {ChartsModule} from "ng2-charts";
import {HttpModule} from "@angular/http";
import {RouterModule,Routes} from "@angular/router";
import {FlashMessagesModule} from "angular2-flash-messages"



import { AppComponent } from './app.component';
import { DevEmployeeByProjectComponent } from './Employee/dev-employee-by-project/dev-employee-by-project.component';
import { Employee } from './employee/employee.component.ts/employee.component';
import { EmployeeByAddressComponent } from './employee/employee-by-address/employee-by-address.component';
import { EmployeeByAgeComponent } from './employee/employee-by-age/employee-by-age.component';
import { EmployeeByCompanyJoinDateComponent } from './employee/employee-by-company-join-date/employee-by-company-join-date.component';
import { EmployeeByJoinDateComponent } from './employee/employee-by-join-date/employee-by-join-date.component';
import { EmployeeByRegionComponent } from './employee/employee-by-region/employee-by-region.component';
import { EmployeeByTitleComponent } from './employee/employee-by-title/employee-by-title.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {AuthGuard} from "./services/auth-guard.service";
import {AuthenticateService} from "./services/authenticate.service";
import {EmployeeService} from "./services/employee.service"
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

const appRoutes : Routes = [
 {path :'',component : HomeComponent},
 {path :'login',component : LoginComponent},
 {path :'dashboard',component :DashboardComponent},
 {path : 'dashboard/devEmpByProjects' ,component : DevEmployeeByProjectComponent},
 {path : 'dashboard/empByAddress' ,component : EmployeeByAddressComponent},
 {path : 'dashboard/empByAge' ,component : EmployeeByAgeComponent},
 {path : 'dashboard/empByJoinDate' ,component : EmployeeByJoinDateComponent},
 {path : 'dashboard/empAtStart' ,component : EmployeeByCompanyJoinDateComponent},
 {path : 'dashboard/empByRegion' ,component : EmployeeByRegionComponent},
 {path : 'dashboard/empByTitle' ,component : EmployeeByTitleComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    DevEmployeeByProjectComponent,
    EmployeeByAddressComponent,
    EmployeeByAgeComponent,
    EmployeeByCompanyJoinDateComponent,
    EmployeeByJoinDateComponent,
    EmployeeByRegionComponent,
    EmployeeByTitleComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,ChartsModule,HttpModule,FormsModule,RouterModule.forRoot(appRoutes),FlashMessagesModule
  ],
  providers: [EmployeeService,AuthenticateService,AuthGuard,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
