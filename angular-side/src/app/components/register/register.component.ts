import {Component, OnInit} from '@angular/core';
import {ValidateService} from 'app/services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages';
import { AuthService } from 'app/services/auth.service';
import {Router} from '@angular/router';

@Component({selector: 'app-register', templateUrl: './register.component.html', styleUrls: ['./register.component.css']})
export class RegisterComponent implements OnInit {
  name : string;
  username : string;
  email : string;
  password : string;

  constructor(private validateService : ValidateService, 
    private flashMessageService : FlashMessagesService,
    private authService : AuthService,
    private router : Router ) {}

  onRegister = () => {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    }
    if (!this.validateService.validateInput(user)) {
      this
        .flashMessageService
        .show('Please fill the fields', {
          timeout: 2000,
          cssClass: 'alert-danger'
        });
        return false;
    }
    if (!this.validateService.validateEmail(this.email)) {
      this
        .flashMessageService
        .show('Email is not valid', {
          timeout: 2000,
          cssClass: 'alert-danger'
        });
        return false;
    }

    this.authService.registerUser(user).subscribe(data=>{
      if(data.success){
        this.flashMessageService.show('You are now registered and can login',{
          timeout : 2000,
          cssClass : 'alert-success'
        })
        this.router.navigate(['/login']);
      }else{
        this.flashMessageService.show('Somethings went wrong ',
      {
        timeout : 2000,
        cssClass : 'alert-danger'
      });
      this.router.navigate(['/register']);
      }
    })
  }

  ngOnInit() {}

}
