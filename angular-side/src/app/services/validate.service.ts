import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

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

  validateEmail = (email)=>{
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

}
