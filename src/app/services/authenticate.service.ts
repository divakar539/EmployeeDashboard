import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticateService {

 user = {
  username : 'admin',
 password : '1234'
}

isLoggedIn : boolean ;
  constructor() { }

  authenticateUser(user){
    if(user.username === this.user.username && user.password === this.user.password){
      this.isLoggedIn = true;
      return this.isLoggedIn ;
    }
    else{
      this.isLoggedIn = false;
      return this.isLoggedIn;
    }
  }


}
