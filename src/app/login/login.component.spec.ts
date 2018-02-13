import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { FormsModule } from '@angular/forms';
import { AuthenticateService } from '../services/authenticate.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpModule } from '@angular/http';
import { FlashMessagesModule } from 'angular2-flash-messages/module/module';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports : [FormsModule,RouterTestingModule,HttpModule,FlashMessagesModule],
      providers : [AuthenticateService,FlashMessagesService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Login Component', () => {
    expect(component).toBeTruthy();
  });
});
