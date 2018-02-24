import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

  //validation for the blank data
   validateInput = (input)=>{
    let result = true;
    for (const key in input) {
      if (input.hasOwnProperty(key)) {
          if(!input[key])
            result = false && result;      
      }
    }
    return result;
  }

  //validate the email address
  validateEmail = (email)=>{
    var re = /^[a-z]+(\.?[a-z])*@[a-z]+([a-z]+\.)+[a-z]+$/;
    return re.test(email);
  }

}
