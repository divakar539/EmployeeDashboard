import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { Router } from '@angular/router';
import { RouterTestingModule  } from '@angular/router/testing';
import { AuthenticateService } from '../services/authenticate.service';
import { EmployeeService } from '../services/employee.service';
import { HttpModule } from '@angular/http/';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import {APP_BASE_HREF} from '@angular/common'

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      providers : [AuthenticateService,EmployeeService,FlashMessagesService],
      imports : [RouterTestingModule,HttpModule,FlashMessagesModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create NavBar Component', () => {
    expect(component).toBeTruthy();
  });
});
