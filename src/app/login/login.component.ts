import { Component } from '@angular/core';
import { AuthenticateService } from '../services/authenticate.service';
import {Router} from "@angular/router";
import {FlashMessagesService} from "angular2-flash-messages"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  username : String;
  password : String;

  constructor(private _authService : AuthenticateService,private _router : Router,private flashMessage : FlashMessagesService) { }


  onLoginSubmit(){
    const user = {
      username : this.username,
      password : this.password
    }
    let result = this._authService.authenticateUser(user);
    if(result == true){
      this.flashMessage.show('You are now logged in',{
        cssClass : 'alert-success',
        timeout : 5000
      });
      this._router.navigate(['/dashboard']);
    }
    else{
      this.flashMessage.show('Wrong Username or Password..Please try again',{
        cssClass : 'alert-danger',
        timeout : 5000
      });
      this._router.navigate(['/login']);
    }
  }
}
