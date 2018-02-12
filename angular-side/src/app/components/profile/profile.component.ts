import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user :Object;
  constructor(private authService : AuthService) { }

  ngOnInit() {
    this.authService.getProfile().
    subscribe(response=>{
      this.user = response.user;
    },error=>{
      return false;
    })
  }

}
