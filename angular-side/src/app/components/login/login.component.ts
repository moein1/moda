import { Component, OnInit } from '@angular/core';
import { ValidateService } from 'app/services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username :string;
  password : string;
  showSpinner : boolean;
  constructor(private validateSerive : ValidateService ,
              private flashMessageService : FlashMessagesService) { }

  onLogin=()=>{
    const auth = {username : this.username , password : this.password};
    if(!this.validateSerive.validateInput(auth)){
      this.flashMessageService.show('Please fills the input' ,{
        timeout : 2000,
        cssClass : 'alert-danger'
      })
    }else{
      this.showSpinner = true;

    }
  }

  ngOnInit() {
  }

}
