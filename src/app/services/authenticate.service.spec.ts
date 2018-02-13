import { TestBed, inject } from '@angular/core/testing';

import { AuthenticateService } from './authenticate.service';

describe('AuthenticateService', () => {
  var user1 = {
    username : 'admin',
    password : '1234'
  }

  var user2 = {
    username : 'employee',
    password : '1234'
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticateService]
    });
    
  });

  it('should return true if login is successful', inject([AuthenticateService], (service: AuthenticateService) => {
    expect(service.authenticateUser(user1)).toBeTruthy();
  }));

  it('should return falsy if login is unsuccessful', inject([AuthenticateService], (service: AuthenticateService) => {
    expect(service.authenticateUser(user2)).toBeFalsy();
  }));
});
