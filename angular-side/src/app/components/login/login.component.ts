import {Component, OnInit} from '@angular/core';
import {ValidateService} from 'app/services/validate.service';
import {FlashMessagesService} from 'angular2-flash-messages/module/flash-messages.service';
import {AuthService} from 'app/services/auth.service';
import {Router} from '@angular/router';

@Component({selector: 'app-login', templateUrl: './login.component.html', styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {
  username : string;
  password : string;
  showSpinner : boolean;
  constructor(private validateSerive : ValidateService, private flashMessageService : FlashMessagesService, private authService : AuthService, private router : Router) {}

  onLogin = () => {
    const auth = {
      username: this.username,
      password: this.password
    };
    if (!this.validateSerive.validateInput(auth)) {
      this
        .flashMessageService
        .show('Please fills the input', {
          timeout: 2000,
          cssClass: 'alert-danger'
        })
    } else {
      this.showSpinner = true;
      this
        .authService
        .authenticatesUser(auth)
        .subscribe(response => {
          this
            .flashMessageService
            .show(response.success
              ? 'Login successfully'
              : response.msg, {
              timeout: 2000,
              cssClass: response.success
                ? 'alert-success'
                : 'alert-danger'
            })
          this.showSpinner = false;
          //save the token in the local storage
          if (response.token) {
            this
              .authService
              .storeUserData(response.token, response.user);
          }
          const nextUrl = response.success
            ? '/dashboard'
            : '/login';
          this
            .router
            .navigate([nextUrl]);
          console.log(response);
        })
    }
  }

  ngOnInit() {}

}
