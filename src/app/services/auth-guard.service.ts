import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthenticateService } from './authenticate.service';
 
@Injectable()
export class AuthGuard implements CanActivate {
 
  constructor(private auth: AuthenticateService, private router: Router) {}
 
  canActivate() {
    if(this.auth.isLoggedIn) {
      console.log(this.auth.isLoggedIn);
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log(this.auth.isLoggedIn);
      return false;
    }
  }
}