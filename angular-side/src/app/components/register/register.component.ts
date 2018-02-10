import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'app/services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name : string;
  username : string;
  email : string;
  password : string;

  constructor(private validateService : ValidateService,
  private flashMessageService :FlashMessagesService) { }

  onRegister=()=>{
    const user = {
      name : this.name,
      username : this.username,
      email : this.email,
      password : this.password
    }
    if(!this.validateService.validateRegister(user) ){
      this.flashMessageService.show('Please fill the fields' ,
      {timeout : 2000 , cssClass:'invalid' }  )
    }
    if(!this.validateService.validateEmail(this.email)){
      this.flashMessageService.show('Email is not valid',
      {timeout : 2000 , cssClass : 'invalid'})
    }
  }

  ngOnInit() {
  }

}
