import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authService : AuthService ,
    private flashMessage : FlashMessagesService,
  private router : Router ) {}

  ngOnInit() {
  }

  onLogout = ()=>{
    this.authService.logout();
    this.flashMessage.show('You logged out successfully' ,{
      timeout : 2000,
      cssClass : 'alert-success'
    })
    this.router.navigate(['/login']);
  }

}
