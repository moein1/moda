import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  validateRegister=(user)=>{    
    if(!user.name || !user.username || !user.email || !user.password){
      return false;
    }
    return true;
  }

  validateEmail = (email)=>{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

}
