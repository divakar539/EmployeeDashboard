import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import { RouterTestingModule } from '@angular/router/testing';
import { AuthenticateService } from './services/authenticate.service';
import { EmployeeService } from './services/employee.service';
import { HttpModule } from '@angular/http/';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,NavbarComponent,
      ],
      imports: [
        FlashMessagesModule,RouterTestingModule,HttpModule
      ],
      providers: [
        AuthenticateService,EmployeeService,FlashMessagesService
      ]
    }).compileComponents();
  }));
  it('should create the App Component', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(fixture).toBeTruthy();
  }));
});
